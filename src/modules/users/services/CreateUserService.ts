import auth from '@config/auth';
import AppError from '@shared/errors';
import { sign } from 'jsonwebtoken';
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

interface IDataReturn {
  user: User;
  token: string;
}

@injectable()
class CreateUserService {
  constructor (
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}
  async execute({email, firstname, lastname, password, username}: IRequest): Promise<IDataReturn> {
    const existEmail = await this.usersRepository.findByEmail(email);

    if(existEmail) {
      throw new AppError('Este e-mail já existe. Por favor, informe outro', ' 401 unauthorized', 401);
    }

    const existUsername = await this.usersRepository.findByUsername(username);

    if(existUsername) {
      throw new AppError('Este username já existe. Por favor, informe outro', ' 401 unauthorized', 401);
    }

    const user = await this.usersRepository.create({
      email,
      firstname,
      lastname,
      password,
      username: `@${username}`
    });

    const { secret } = auth.jwt;

    const token = sign({
    }, secret, {
      subject: user.id,
      expiresIn: 86400000,
    });

    return {
      user,
      token
    }
  }
}

export default CreateUserService;