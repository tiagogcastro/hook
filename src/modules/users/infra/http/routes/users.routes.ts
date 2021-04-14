import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import multer from 'multer';
import uploadConfig from '@config/upload';

import UsersController from '../controllers/UsersController';
import UsersAvatarController from '../controllers/UserAvatarController';

const usersRouter = Router();

const usersController = new UsersController();
const usersAvatarController = new UsersAvatarController();

const upload = multer(uploadConfig);

usersRouter.post('/', usersController.create);
usersRouter.get('/profile', ensureAuthenticated, usersController.show);
usersRouter.put('/', ensureAuthenticated,  usersController.update);
usersRouter.delete('/', ensureAuthenticated,  usersController.delete);

usersRouter.patch('/avatar',
  ensureAuthenticated, 
  upload.single('avatar'),
  usersAvatarController.update);

usersRouter.post('/covers',
  ensureAuthenticated, 
  upload.array('covers', 4), (request) => console.log(request.files));

export default usersRouter;