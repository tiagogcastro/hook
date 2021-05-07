import Post from '@modules/posts/infra/typeorm/entities/Post';
import IPostsRepository from '@modules/posts/repositories/IPostsRepository';
import AppError from '@shared/errors';
import { inject, injectable } from 'tsyringe';
import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface IDataReturn {
  user: User;
  posts: Post[] | undefined;
  totalPosts: number;
}

@injectable()
class ShowUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) {}
  async execute(user_id: string): Promise<IDataReturn> {
    const user = await this.usersRepository.findByid(user_id);
    const posts = await this.postsRepository.findAllByUser(user_id);
    console.log(user);

    if(!user) {
      throw new AppError('Este usuário não existe', '401 unauthorized', 401);
    }
    let totalPosts: number = 0;
    if(posts?.length) { 
      totalPosts = posts.length;
    }

    return {
      user,
      posts,
      totalPosts
    };
  }
}

export default ShowUserService;