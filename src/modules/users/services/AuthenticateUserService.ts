import auth from '@config/auth';
import AppError from '@shared/errors';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import User from '../infra/typeorm/entities/User';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IDataReturn {
  user: User;
  token: string;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  async execute({email, password}: IRequest): Promise<IDataReturn> {
    const user = await this.usersRepository.findByEmail(email);
    
    if(!user) {
      throw new AppError('Está conta não existe.', '401 unauthorized', 401);
    }

    const passwordMatched = await this.hashProvider.compareHash(password, user.password);

    if(!passwordMatched) {
      throw new AppError('Senha ou e-mail incorreto', '401 unauthorized', 401); 
    }

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

export default AuthenticateUserService;