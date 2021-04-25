import ICreatePostDto from '@modules/posts/dtos/ICreatePostDto';
import IPostRepository from '@modules/posts/repositories/IPostsRepository';
import { getRepository, Repository } from 'typeorm';
import Post from '../entities/Post';

// Criando os metodos do user usando typeorm

class PostsRepository implements IPostRepository{
  private ormRepository: Repository<Post>;

  constructor() {
    this.ormRepository = getRepository(Post);
  }

  async create(postData: ICreatePostDto): Promise<Post> {
    const post = this.ormRepository.create(postData);

    await this.ormRepository.save(post);

    return post;
  }

  // async update(id: string, userData: IUpdateUserDto): Promise<User | undefined> {
  //   const user = await this.ormRepository.update(id, userData);

  //   if(user.affected === 1) {
  //     const userUpdated = await this.ormRepository.findOne(id);
  //     return userUpdated
  //   }
  // }

  async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

   async findAll_OneUser(user_id: string): Promise<Post[]> {
    const post = await this.ormRepository.find({
      where: {user_id},
      relations: ['user']
    });

    return post;
  }

  async findAll(): Promise<Post[]> {
    const post = await this.ormRepository.find({
      relations:['user'],
      order: {created_at: 'DESC'},
    });

    return post;
  }

  async findByid(id: string): Promise<Post | undefined> {
    const post = await this.ormRepository.findOne({
      where: {id}
    });

    return post;
  }
}

export default PostsRepository;