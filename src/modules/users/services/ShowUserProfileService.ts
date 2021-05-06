import Post from '@modules/posts/infra/typeorm/entities/Post';
import IPostsRepository from '@modules/posts/repositories/IPostsRepository';
import AppError from '@shared/errors';
import { inject, injectable } from 'tsyringe';
import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface IDataReturn {
  user: User;
  posts: Post[];
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
  async execute(id: string): Promise<IDataReturn> {
    const user = await this.usersRepository.show(id);
    const posts = await this.postsRepository.findAll_OneUser(id);

    if(!user) {
      throw new AppError('Este usuário não existe', '401 unauthorized', 401);
    }

    const totalPosts = posts.length;

    return {
      user,
      posts,
      totalPosts
    };
  }
}

export default ShowUserService;