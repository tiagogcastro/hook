// Cria a interface do usuário sem depender do typeorm.
// No typeorm só vai depender dessa interface.

import ICreateUserDto from '../dtos/ICreateUserDTO';
import User from '../infra/typeorm/entities/User';

export default interface IUsersRepository {
  create(data: ICreateUserDto): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
  findByUsername(username: string): Promise<User | undefined>;
  findByid(id: string): Promise<User | undefined>;
  save(user: User): Promise<User>;
}