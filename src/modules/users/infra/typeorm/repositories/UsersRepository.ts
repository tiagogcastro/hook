import IUsersRepository from '@modules/users/repositories/IUsersRepository';

// Criando os metodos do user usando typeorm
class UsersRepository  implements IUsersRepository{
  async create(): Promise<void> {

  }
}

export default UsersRepository;