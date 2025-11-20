import { Router } from 'express';
import defaultController from '../controllers/default';
import { APIResponse } from '../utils/globalErrorUtil';

const baseRouter = Router();

baseRouter.route('/').get(defaultController, APIResponse);

export default baseRouter;
