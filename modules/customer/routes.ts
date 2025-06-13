import { Router } from 'express';
import * as ctrl from './controller.ts';
import { validate } from '../../middlewares/validate.ts';
import { createCustomerSchema } from './schema.ts';

const router = Router();

router.get('/',    ctrl.list);
router.get('/:id', ctrl.show);
router.post('/',   validate(createCustomerSchema), ctrl.create);

export default router;
