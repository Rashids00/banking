import { AnyZodObject } from 'zod';
import ApiError from '../utils/ApiError.ts';
import { RequestHandler } from 'express';

export const validate =
  (schema: AnyZodObject): RequestHandler =>
  (req, _res, next) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (err: any) {
      next(new ApiError(422, err.errors?.[0]?.message ?? 'Invalid data'));
    }
  };
