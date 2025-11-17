import { Request, Response, NextFunction } from 'express';
import APIResponseType from '../../types/apiResponseType';
import defaultService from '../../services/default';
async function defaultController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const data: boolean = defaultService();
  const responsePayload: APIResponseType = {
    status: 200,
    message: 'ExpressJS with Typescript and Prisma',
    data,
  };

  next(responsePayload);
}

export default defaultController;
