// Cria a interface do usuário sem depender do typeorm.
// No typeorm só vai depender dessa interface.

import ICreatePostDto from '../dtos/ICreatePostDto';
import Post from '../infra/typeorm/entities/Post';

export default interface IPostsRepository {
  create(data: ICreatePostDto): Promise<Post>;
  // update(id: string, data: IUpdateUserDto): Promise<User | undefined>;
  delete(id: string): Promise<void>;
  // show(id: string): Promise<User | undefined>;

  // save(user: User): Promise<User>;
  
  // findByEmail(email: string): Promise<User | undefined>;
  // findByUsername(username: string): Promise<User | undefined>;
  findByid(id: string): Promise<Post | undefined>;

}