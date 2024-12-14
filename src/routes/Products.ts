import { Router } from 'express';

import errorWrapper from '../helpers/errorHandler/errorWrapper';
import {
  gitClothesController,
  gitElectronicsController,
  gitFootwearController,
  gitHomeController,
  gitMachinesController,
  gitProductController,
  gitProductsController,
  gitWatchesController,
} from '../controllers/Products';

export const ProductsRouter = Router();
ProductsRouter.get('/', errorWrapper(gitProductsController));
ProductsRouter.get('/watches', errorWrapper(gitWatchesController));
ProductsRouter.get('/home', errorWrapper(gitHomeController));
ProductsRouter.get('/clothes', errorWrapper(gitClothesController));
ProductsRouter.get('/footwear', errorWrapper(gitFootwearController));
ProductsRouter.get('/electronics', errorWrapper(gitElectronicsController));
ProductsRouter.get('/machines', errorWrapper(gitMachinesController));
ProductsRouter.get('/details/:id', errorWrapper(gitProductController));
