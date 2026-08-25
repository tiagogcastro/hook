import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import multer from 'multer';
import uploadConfig from '@config/upload';

import ProfileController from '../controllers/ProfileController';
import UsersAvatarController from '../controllers/UserAvatarController';

const profileRouter = Router();
profileRouter.use(ensureAuthenticated);

const profileController = new ProfileController();
const usersAvatarController = new UsersAvatarController();

const upload = multer(uploadConfig);

profileRouter.get('/:user_id', profileController.show);

profileRouter.put('/', profileController.update);
profileRouter.delete('/', profileController.delete);

profileRouter.patch(
  '/avatar',
  upload.single('avatar'),
  usersAvatarController.update,
);

profileRouter.post('/covers', upload.array('covers', 4), request =>
  console.log(request.files),
);

export default profileRouter;
