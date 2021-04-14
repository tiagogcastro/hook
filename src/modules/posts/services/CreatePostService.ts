import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import AppError from '@shared/errors';
import { inject, injectable } from 'tsyringe';
import Post from '../infra/typeorm/entities/Post';
import IPostsRepository from '../repositories/IPostsRepository';

interface IRequest {
  user_id: string;
  description: string;
  content: any;
}

@injectable()
class CreatePostService {
  constructor (
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

  ) {}
  async execute({ user_id, content, description}: IRequest): Promise<Post> {
    const user = await this.usersRepository.findByid(user_id);

    if(!user) {
      throw new AppError('Você não está logado.', '401 unauthorized', 401);
    }

    if(content.length > 6) {
      throw new AppError('Máximo de imagem permitida para envio são 6', '401 unauthorized', 401);
    }

    const filename = content.map((obj: {filename: string}) => ({ filename: obj.filename }));

    const post = await this.postsRepository.create({
      user_id,
      description,
      content: filename,
    });

    return post;
  }
}

export default CreatePostService;