import { inject, injectable } from "tsyringe";
import { parse as csvParse } from 'csv-parse';
import fs from 'fs';

import { Statement } from '../../entities/Statement';
import { IStatementsRepository } from "../../repositories/IStatementsRepository";
import { IUsersRepository } from "../../../users/repositories/IUsersRepository";
import { CreateStatementError } from "../createStatement/CreateStatementError";

type IImportStatement =
Pick<
  Statement,
  'description' |
  'amount' |
  'type'
>

interface ICreateStatement {
  file: Express.Multer.File | undefined;
  user_id: string;
}

@injectable()
class ImportStatementUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject("StatementsRepository")
    private statementsRepository: IStatementsRepository,
  ) {}

  loadStatements(file: Express.Multer.File): Promise<IImportStatement[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const statements: IImportStatement[] = [];

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [description, amount, type] = line;

          statements.push({
            description,
            amount,
            type
          });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(statements);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute({ file, user_id }: ICreateStatement): Promise<void> {
    if (file) {
      const statements = await this.loadStatements(file);


      const user = await this.usersRepository.findById(user_id);

      statements.map(async (statement) => {
        const { description, amount, type } = statement;

        if(!user) {
          throw new CreateStatementError.UserNotFound();
        }

        if(type === 'withdraw') {
          const { balance } = await this.statementsRepository.getUserBalance({ user_id });

          if (balance < amount) {
            throw new CreateStatementError.InsufficientFunds()
          }
        }

        await this.statementsRepository.create({
          user_id,
          description,
          amount,
          type
        });
      });
    }
  }
}

export { ImportStatementUseCase }
