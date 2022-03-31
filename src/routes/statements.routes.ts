import { Router } from 'express';
import multer from 'multer';

import { CreateStatementController } from '../modules/statements/useCases/createStatement/CreateStatementController';
import { GetBalanceController } from '../modules/statements/useCases/getBalance/GetBalanceController';
import { GetStatementOperationController } from '../modules/statements/useCases/getStatementOperation/GetStatementOperationController';
import { ImportStatementController } from '../modules/statements/useCases/importStatement/ImportStatementController'
import { ensureAuthenticated } from '../shared/infra/http/middlwares/ensureAuthenticated';

const upload = multer({
  dest: "./tmp/statements",
});

const statementRouter = Router();
const getBalanceController = new GetBalanceController();
const createStatementController = new CreateStatementController();
const getStatementOperationController = new GetStatementOperationController();
const importStatementController = new ImportStatementController();

statementRouter.use(ensureAuthenticated);

statementRouter.get('/balance', getBalanceController.execute);
statementRouter.post('/deposit', createStatementController.execute);
statementRouter.post('/withdraw', createStatementController.execute);
statementRouter.get('/:statement_id', getStatementOperationController.execute);
statementRouter.post(
  '/import',
  upload.single('file'),
  importStatementController.execute
);

export { statementRouter };
