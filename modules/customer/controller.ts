import { Request, Response } from 'express';
import * as service from './service.ts';
import ApiError from '../../utils/ApiError.ts';
import { asyncHandler } from '../../utils/asyncHandler.ts';

export const list = asyncHandler(async (_req: Request, res: Response) => {
  const customers = await service.getAll();
  res.json(customers);
});

export const show = asyncHandler(async (req: Request, res: Response) => {
  const customer = await service.getById(req.params.id);
  if (!customer) throw new ApiError(404, 'Customer not found');
  res.json(customer);
});

export const create = asyncHandler(async (req: Request, res: Response) => {
  const customer = await service.create(req.body);
  res.status(201).json(customer);
});
