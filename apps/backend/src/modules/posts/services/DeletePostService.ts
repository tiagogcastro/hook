import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import AppError from '@shared/errors';
import { inject, injectable } from 'tsyringe';
import IPostsRepository from '../repositories/IPostsRepository';

interface IRequest {
  id: string;
  user_id: string;
}

@injectable()
class DeletePostService {
  constructor (
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

  ) {}
  async execute({ id, user_id }: IRequest): Promise<void> {
    const user = await this.usersRepository.findByid(user_id);
    const post = await this.postsRepository.findByid(id);

    if(!user) {
      throw new AppError('Você não está logado.', '401 unauthorized', 401);
    }

    if(!post) {
      throw new AppError('Este post não existe', '401 unauthorized', 401);
    }

    return await this.postsRepository.delete(id);
  }
}

export default DeletePostService;