import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ImportStatementUseCase } from './ImportStatementUseCase';

export class ImportStatementController {
  async execute(request: Request, response: Response) {
    const { id: user_id } = request.user;
    const { file } = request;

    const importStatement = container.resolve(ImportStatementUseCase);

    await importStatement.execute({
      user_id,
      file,
    });

    return response.status(201).send();
  }
}
