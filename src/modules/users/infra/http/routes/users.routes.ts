import { Router } from 'express';

import UsersController from '../controllers/UsersController';
import ProfileController from '../controllers/ProfileController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();

const usersController = new UsersController();
const profileController = new ProfileController();

usersRouter.post('/', usersController.create);
usersRouter.get('/feed', ensureAuthenticated, profileController.index);

export default usersRouter;