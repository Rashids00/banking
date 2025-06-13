import { z } from 'zod';

export const createCustomerSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName:  z.string().min(2).max(50),
  email:     z.string().email(),
  phone:     z.string().regex(/^\+?\d{10,15}$/),
});
