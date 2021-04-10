// Cria a interface do usuário sem depender do typeorm.
// No typeorm só vai depender dessa interface.

import ICreateUserDto from '../dtos/ICreateUserDTO';
import IUpdateUserDto from '../dtos/IUpdateUserDTO';
import User from '../infra/typeorm/entities/User';

export default interface IUsersRepository {
  create(data: ICreateUserDto): Promise<User>;
  update(id: string, data: IUpdateUserDto): Promise<User | undefined>;
  delete(id: string): Promise<void>;
  show(id: string): Promise<User | undefined>;

  save(user: User): Promise<User>;
  
  findByEmail(email: string): Promise<User | undefined>;
  findByUsername(username: string): Promise<User | undefined>;
  findByid(id: string): Promise<User | undefined>;

}