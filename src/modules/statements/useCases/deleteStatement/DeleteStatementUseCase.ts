import { inject, injectable } from "tsyringe";

import { IStatementsRepository } from "../../repositories/IStatementsRepository";

@injectable()
class DeleteStatementUseCase {
  constructor(
    @inject("StatementsRepository")
    private statementsRepository: IStatementsRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.statementsRepository.delete(id);
  }
}

export { DeleteStatementUseCase }
