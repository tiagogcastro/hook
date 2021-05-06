import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import multer from 'multer';
import uploadConfig from '@config/upload';

import ProfileController from '../controllers/ProfileController';
import UsersAvatarController from '../controllers/UserAvatarController';

const usersRouter = Router();

const profileController = new ProfileController();
const usersAvatarController = new UsersAvatarController();

const upload = multer(uploadConfig);

usersRouter.get('/profile/:id', ensureAuthenticated, profileController.show);

usersRouter.get('/feed', ensureAuthenticated, profileController.index);

usersRouter.put('/', ensureAuthenticated,  profileController.update);
usersRouter.delete('/', ensureAuthenticated,  profileController.delete);

usersRouter.patch('/avatar',
  ensureAuthenticated, 
  upload.single('avatar'),
  usersAvatarController.update);

usersRouter.post('/covers',
  ensureAuthenticated, 
  upload.array('covers', 4), (request) => console.log(request.files));

export default usersRouter;