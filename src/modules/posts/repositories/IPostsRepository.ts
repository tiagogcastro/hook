import ICreatePostDto from '../dtos/ICreatePostDto';
import Post from '../infra/typeorm/entities/Post';

export default interface IPostsRepository {
  create(data: ICreatePostDto): Promise<Post>;
  delete(id: string): Promise<void>;

  findAllByUser(user_id: string): Promise<Post[] | undefined>;
  findAll(): Promise<Post[] | undefined>;
  findByid(id: string): Promise<Post | undefined>;
}