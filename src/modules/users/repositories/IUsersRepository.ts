import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../infra/typeorm/entities/User';
import IFindAllUsersDTO from '../dtos/IFindAllUsersDTO';
import IUpdateUserDto from '../dtos/IUpdateUserDTO';

export default interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  update(id: string, data: IUpdateUserDto): Promise<User | undefined>;
  delete(id: string): Promise<void>;

  save(user: User): Promise<User>;

  findByEmail(email: string): Promise<User | undefined>;
  findByUsername(username: string): Promise<User | undefined>;
  findByid(user_id: string): Promise<User | undefined>;

  findAll({ except_user_id }: IFindAllUsersDTO): Promise<User[]>;
}
