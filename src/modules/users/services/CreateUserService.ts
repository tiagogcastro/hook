import auth from '@config/auth';
import AppError from '@shared/errors';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import User from '../infra/typeorm/entities/User';

import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import ITokenProvider from '../providers/TokenProvider/models/ITokenProvider';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  username: string;
}

interface IResponse {
  user: User;
  token: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,

    @inject('TokenProvider')
    private tokenProvider: ITokenProvider,
  ) {}

  async execute({
    email,
    firstname,
    lastname,
    password,
    username,
  }: IRequest): Promise<IResponse> {
    const existEmail = await this.usersRepository.findByEmail(email);

    if (existEmail) {
      throw new AppError(
        'Este e-mail já existe. Por favor, informe outro',
        '401 unauthorized',
        401,
      );
    }

    const existUsername = await this.usersRepository.findByUsername(username);

    if (existUsername) {
      throw new AppError(
        'Este username já existe. Por favor, informe outro',
        '401 unauthorized',
        401,
      );
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      email,
      firstname,
      lastname,
      password: hashedPassword,
      username: `@${username}`,
    });

    const { secret } = auth.jwt;

    const token = await this.tokenProvider.generateSignToken({}, secret, {
      subject: user.id,
      expiresIn: '1d',
    });

    return {
      user,
      token,
    };
  }
}

export default CreateUserService;
