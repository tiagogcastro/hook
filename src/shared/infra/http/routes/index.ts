import { Router} from 'express';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
// import friendsRouter from '@modules/friends/infra/http/routes/friends.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import profileRouter from '@modules/users/infra/http/routes/userProfile.routes';
import postsRouter from '@modules/posts/infra/http/routes/posts.routes';

const routes = Router();

routes.use('/users', usersRouter);
// routes.use('/friends', friendsRouter);
routes.use('/profile', profileRouter);
routes.use('/', sessionsRouter);
routes.use('/posts', postsRouter);

export default routes;