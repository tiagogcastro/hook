import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import UsersController from '../controllers/UsersController';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';


const usersRouter = Router();
const usersController = new UsersController();

const upload = multer(uploadConfig);

usersRouter.post('/', usersController.create);
usersRouter.patch('/avatar',
  ensureAuthenticated, 
  upload.single('avatar'),
  usersController.updateAvatar);

export default usersRouter;