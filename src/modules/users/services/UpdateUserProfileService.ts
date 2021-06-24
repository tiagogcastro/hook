import AppError from '@shared/errors';
import { inject, injectable } from 'tsyringe';
import User from '../infra/typeorm/entities/User';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
  email: string;
  firstname: string;
  lastname: string;
  username: string;

  password?: string;
  old_password?: string;
  password_confirmation?:string;
}

@injectable()
class UpdateUserProfileService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}
  async execute({user_id, email, firstname, lastname, username, password, old_password, password_confirmation}: IRequest): Promise<User | undefined> {
    const user = await this.usersRepository.findByid(user_id);
    const userWithUpdatedEmail =  await this.usersRepository.findByEmail(email);
    const userWithUpdatedUsername =  await this.usersRepository.findByUsername(username);

    if(!user) {
      throw new AppError('Você não está logado para atualizar as informações', '401 unauthorized', 401);
    }

    if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user_id) {
      throw new AppError('Este e-mail já existe', '401 unauthorized', 401);
    }

    if(userWithUpdatedUsername && userWithUpdatedUsername.id !== user_id) {
      throw new AppError('Este username já existe', '401 unauthorized', 401);
    }

    if(password && !old_password) {
      throw new AppError('Para atualizar a senha, informe a antiga', '401 unauthorized', 401);
    }

    if(password !== password_confirmation) {
      throw new AppError('Nova senha não conscide com a confirmação de senha.', '401 unauthorized', 401);
    }

    if(password && old_password) {
      const checkOldPassword = await this.hashProvider.compareHash(old_password, user.password);

      if(!checkOldPassword) {
        throw new AppError('Senha antiga não é correta.', '401 unauthorized', 401);
      }
  
      user.password = await this.hashProvider.generateHash(password);
    }

    const updateUser = await this.usersRepository.update(user_id, {
      email, 
      firstname, 
      lastname, 
      username
    });

    return updateUser;
  }
}

export default UpdateUserProfileService