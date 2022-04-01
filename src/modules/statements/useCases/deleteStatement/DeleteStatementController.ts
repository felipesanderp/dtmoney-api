import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteStatementUseCase } from './DeleteStatementUseCase';

export class DeleteStatementController {
  async execute(request: Request, response: Response) {
    const { statement_id } = request.params;

    const deleteStatementUseCase = container.resolve(DeleteStatementUseCase);

    await deleteStatementUseCase.execute(statement_id);

    return response.status(200).send();
  }
}
