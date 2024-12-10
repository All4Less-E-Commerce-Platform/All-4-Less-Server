import { Router } from 'express';

// import AuthController from '../controllers/AuthController';
import errorWrapper from '../helpers/errorHandler/errorWrapper';
import { isAuth } from '../middlwares/IsAuth';

const router = Router();

// router.post('/sign-in', errorWrapper(AuthController.signin));
router.get(
  '/user/me',
  errorWrapper(isAuth),
  // errorWrapper(AuthController.isAuthenticated),
);
router.get(
  '/security',
  errorWrapper(isAuth),
  // errorWrapper(AuthController.security),
);
router.put(
  '/security',
  errorWrapper(isAuth),
  // errorWrapper(AuthController.Editsecurity),
);

export default router;
