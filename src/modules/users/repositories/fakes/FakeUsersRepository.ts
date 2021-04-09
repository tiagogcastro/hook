import ICreateUserDto from '@modules/users/dtos/ICreateUserDTO';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import {v4 as uuid} from 'uuid';
import User from '@modules/users/infra/typeorm/entities/User';

class FakeUsersRepository implements IUsersRepository{
  private users: User[] = [];

  async create(userData: ICreateUserDto): Promise<User> {
    const user = new User();

    Object.assign(user, {id: uuid()}, userData);

    this.users.push(user);

    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find(user => user.email === email);

    return user;
  }

  async findByid(id: string): Promise<User | undefined> {
    const user = this.users.find(user => user.id === id);

    return user;
  }

  async findByUsername(username: string): Promise<User | undefined> {
    const user = this.users.find(user => user.username === `@${username}`);
    
    return user;
  }

  
  async save(user: User): Promise<User> {
    this.users.push(user);
    
    return user;
  }

}

export default FakeUsersRepository;