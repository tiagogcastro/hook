import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import ICreateUserDto from '@modules/users/dtos/ICreateUserDTO';
import IFindAllUsersDTO from '@modules/users/dtos/IFindAllUsersDTO';
import IUpdateUserDto from '@modules/users/dtos/IUpdateUserDTO';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import { getRepository, Not, Repository } from 'typeorm';
import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  async create(userData: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(userData);

    await this.ormRepository.save(user);

    return user;
  }

  async update(id: string, userData: IUpdateUserDto): Promise<User | undefined> {
    const user = await this.ormRepository.update(id, userData);

    if(user.affected === 1) {
      const userUpdated = await this.ormRepository.findOne(id);
      return userUpdated
    }
  }

  async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });

    return user;
  }

  async findByid(user_id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { id: user_id },
    });

    return user;
  }

  async findByUsername(username: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { username: `@${username}` },
    });
    return user;
  }

  public async save(user: User) : Promise<User> {
    return this.ormRepository.save(user);
  }

  public async findAll({except_user_id}: IFindAllUsersDTO): Promise<User[]> {
    let users: User[];
    if(except_user_id) {
      users = await this.ormRepository.find({
        where: {
          id: Not(except_user_id),
        }
      });
    } else {
      users = await this.ormRepository.find();
    }
    
    return users;
  }
}

export default UsersRepository;
