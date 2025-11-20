import { Request, Response, NextFunction } from 'express';
import APIErrorType from '../../types/apiErrorType';
import defaultService from '../../services/default';
async function defaultController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const data: boolean = defaultService();

    res.status(200).json({
      message: 'ExpressJS with Typescript and Prisma',
      data,
    });
  } catch (err: any) {
    next({
      status: err.status || 500,
      message: err.message || 'Internal Server Error',
      data: err.data,
    } satisfies APIErrorType);
  }
}

export default defaultController;
