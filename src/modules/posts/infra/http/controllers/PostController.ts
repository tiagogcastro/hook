import CreatePostService from '@modules/posts/services/CreatePostService';
import DeletePostService from '@modules/posts/services/DeletePostService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class PostController {
  async create(request: Request, response: Response): Promise<Response> {
    const { description } = request.body;
    const content = request.files;

    const createPostService = container.resolve(CreatePostService)

    const post = await createPostService.execute({
      user_id: request.user.id,
      content,
      description,
    })

    return response.json(post)
  } 

  async delete(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const {id} = request.body;
    const deletePostService = container.resolve(DeletePostService);

    await deletePostService.execute({
      id,
      user_id
    });

    return response.json({
      success: 'Post deletado com sucesso'
    });
  } 
}

export default PostController;