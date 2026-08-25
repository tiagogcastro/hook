import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import multer from 'multer';
import uploadConfig from '@config/upload';
import PostController from '../controllers/PostController';

const postsRouter = Router();

const postController = new PostController();

const upload = multer(uploadConfig);

postsRouter.use(ensureAuthenticated);

postsRouter.post('/', upload.array('content', 6), postController.create);
// postsRouter.get('/profile', postController.show);
// postsRouter.put('/', postController.update);
postsRouter.delete('/', postController.delete);

export default postsRouter;