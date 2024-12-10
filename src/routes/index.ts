import { Router } from 'express';

import authRouter from './auth';
import { Products } from '../models';
import { ProductsRouter } from './Products';

const router = Router();

router.use('/products', ProductsRouter);

export default router;
