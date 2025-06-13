import Customer from './model.ts';

export const getAll = () => Customer.find();
export const getById = (id: string) => Customer.findById(id);
export const create = (data: object) => Customer.create(data);
