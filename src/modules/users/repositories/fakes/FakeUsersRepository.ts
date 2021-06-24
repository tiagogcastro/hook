import ICreateUserDto from '@modules/users/dtos/ICreateUserDTO';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import { v4 as uuid } from 'uuid';
import User from '@modules/users/infra/typeorm/entities/User';
import IFindAllUsersDTO from '@modules/users/dtos/IFindAllUsersDTO';
import IUpdateUserDTO from '@modules/users/dtos/IUpdateUserDTO';

class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async update(id: string, data: IUpdateUserDTO): Promise<User | undefined> {
    throw new Error('Method not implemented.');
  }

  async delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async findAll({ except_user_id }: IFindAllUsersDTO): Promise<User[]> {
    throw new Error('Method not implemented.');
  }

  async create(userData: ICreateUserDto): Promise<User> {
    const user = new User();

    Object.assign(user, { id: uuid() }, userData);

    this.users.push(user);

    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find(userFinded => userFinded.email === email);

    return user;
  }

  async findByid(id: string): Promise<User | undefined> {
    const user = this.users.find(userFinded => userFinded.id === id);

    return user;
  }

  async findByUsername(username: string): Promise<User | undefined> {
    const user = this.users.find(
      userFinded => userFinded.username === `@${username}`,
    );

    return user;
  }

  async save(user: User): Promise<User> {
    this.users.push(user);

    return user;
  }
}

export default FakeUsersRepository;
