import ICreateUserDto from '@modules/users/dtos/ICreateUserDTO';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import { getRepository, Repository } from 'typeorm';
import User from '../entities/User';

// Criando os metodos do user usando typeorm

class UsersRepository implements IUsersRepository{
  private ormRepository: Repository<User>

  constructor() {
    this.ormRepository = getRepository(User)
  }

  async create(userData: ICreateUserDto): Promise<User> {
    const user = this.ormRepository.create(userData);

    await this.ormRepository.save(user);

    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: {email}
    });

    return user;
  }

  async findByid(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: {id}
    });

    return user;
  }

  async findByUsername(username: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: {username: `@${username}`}
    });
    return user;
  }

  public async save(user: User) : Promise<User> {
    return this.ormRepository.save(user);
  }

}

export default UsersRepository;