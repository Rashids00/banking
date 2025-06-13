import { ErrorRequestHandler } from 'express';
import ApiError from '../utils/ApiError.ts';

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  const status = err instanceof ApiError ? err.statusCode : 500;
  const message = err.message ?? 'Server Error';
  res.status(status).json({ success: false, message });
};
