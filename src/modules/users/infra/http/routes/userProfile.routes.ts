import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import multer from 'multer';
import uploadConfig from '@config/upload';

import ProfileController from '../controllers/ProfileController';
import UsersAvatarController from '../controllers/UserAvatarController';

const usersRouter = Router();
usersRouter.use(ensureAuthenticated)

const profileController = new ProfileController();
const usersAvatarController = new UsersAvatarController();

const upload = multer(uploadConfig);

usersRouter.get('/:user_id', profileController.show);

usersRouter.put('/', profileController.update);
usersRouter.delete('/', profileController.delete);

usersRouter.patch('/avatar',
  upload.single('avatar'),
  usersAvatarController.update
);

usersRouter.post('/covers',
  upload.array('covers', 4), (request) => console.log(request.files)
);

export default usersRouter;