import { Router } from 'express';

import authRouter from './auth';
import { Products } from '../models';

const controller = async (
  req: any,
  res: { json: (arg0: Products[]) => void },
) => {
  const products = await Products.findAll({ where: {} });
  res.json(products);
};
const router = Router();
router.get('/products', controller);
router.use(authRouter);

export default router;
