import AppError from '@shared/errors';
import { inject, injectable } from 'tsyringe';
import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  username: string;
}

@injectable()
class UpdateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  async execute({id, email, firstname, lastname, username}: IRequest): Promise<User | undefined> {
    const user = await this.usersRepository.findByid(id);

    if(!user) {
      throw new AppError('Você não está logado para atualizar as informações', '401 unauthorized', 401);
    }

    const updateUser = await this.usersRepository.update(id, {
      email, 
      firstname, 
      lastname, 
      username
    });

    return updateUser;
  }
}

export default UpdateUserService