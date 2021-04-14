import ICreatePostDto from '@modules/posts/dtos/ICreatePostDto';
import IPostRepository from '@modules/posts/repositories/IPostsRepository';
import { getRepository, Repository } from 'typeorm';
import Post from '../entities/Post';

// Criando os metodos do user usando typeorm

class PostsRepository implements IPostRepository{
  private ormRepository: Repository<Post>

  constructor() {
    this.ormRepository = getRepository(Post)
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

  // async index(id: string): Promise<User | undefined> {
  //   const user = await this.ormRepository.findOne(id);
    
  //   return user;
  // }

  async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  async findByid(id: string): Promise<Post | undefined> {
    const post = await this.ormRepository.findOne({
      where: {id}
    });

    return post;
  }

}

export default PostsRepository;