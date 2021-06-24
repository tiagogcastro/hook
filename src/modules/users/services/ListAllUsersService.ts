import { inject, injectable } from 'tsyringe';
import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

@injectable()
class ListAllUsersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  async execute(user_id: string): Promise<User[] | undefined> {
    const users = await this.usersRepository.findAll({
      except_user_id: user_id,
    });
    
    return users;
  }
}

export default ListAllUsersService;