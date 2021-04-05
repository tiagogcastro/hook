import AppError from '@shared/errors';
import { inject } from 'tsyringe';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  email: string;
  name: string;
  lastname: string;
  password: string;
}
class CreateUserService {
  constructor (
    @inject('UsersRepository')
    private UsersRepository: IUsersRepository
  ) {}
  async execute({email, name, lastname, password}: IRequest): Promise<void> {

  }
}

export default CreateUserService;