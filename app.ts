import express from 'express';
import helmet from 'helmet';
import customerRoutes from './modules/customer/routes.ts';
import { errorHandler } from './middlewares/error.middleware.ts';

const app = express();

app.use(helmet());
app.use(express.json());

app.use('/api/v1/customers', customerRoutes);

// 404 fallback
app.use((_req, _res, next) => next(new Error('Route not found')));

// centralized error middleware
app.use(errorHandler);

export default app;
