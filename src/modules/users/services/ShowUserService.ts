import AppError from '@shared/errors';
import { inject, injectable } from 'tsyringe';
import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

@injectable()
class ShowUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  async execute(id: string): Promise<User> {
    const user = await this.usersRepository.show(id);

    if(!user) {
      throw new AppError('Você não está logado.', ' 401 unauthorized', 401);
    }

    return user;
  }
}

export default ShowUserService;