import { Request, Response, NextFunction } from 'express';
import APIResponseType from '../types/apiResponseType';

export function APIResponse(
  resBody: APIResponseType,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.status(resBody.status).json({
    message: resBody.message,
    data: resBody.data || null,
  });
}
