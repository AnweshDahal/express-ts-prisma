import { Router } from 'express';
import defaultController from '../controllers/default';

const baseRouter = Router();

baseRouter.route('/').get(defaultController);

export default baseRouter;
