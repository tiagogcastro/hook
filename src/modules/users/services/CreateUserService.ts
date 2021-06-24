import AppError from '@shared/errors';
import { inject, injectable } from 'tsyringe';
import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  username: string;
}
@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    email,
    firstname,
    lastname,
    password,
    username,
  }: IRequest): Promise<User> {
    const existEmail = await this.usersRepository.findByEmail(email);

    if (existEmail) {
      throw new AppError(
        'Este e-mail já existe. Por favor, informe outro',
        ' 401 unauthorized',
        401,
      );
    }

    const existUsername = await this.usersRepository.findByUsername(username);

    if (existUsername) {
      throw new AppError(
        'Este username já existe. Por favor, informe outro',
        ' 401 unauthorized',
        401,
      );
    }

    const user = await this.usersRepository.create({
      email,
      firstname,
      lastname,
      password,
      username: `@${username}`,
    });

    return user;
  }
}

export default CreateUserService;
