import { Request, Response, NextFunction } from 'express';
import APIErrorType from '../types/apiErrorType';

export function GlobalErrorUtil(
  resBody: APIErrorType,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.status(resBody.status).json({
    message: resBody.message,
    data: resBody.data || null,
  });
}

export default GlobalErrorUtil;
