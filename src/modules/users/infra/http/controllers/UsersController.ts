import CreateUserService from '@modules/users/services/CreateUserService';
import DeleteUserService from '@modules/users/services/DeleteUserService';
import IndexUserService from '@modules/users/services/IndexUserService';
import ShowUserService from '@modules/users/services/ShowUserService';
import UpdateUserService from '@modules/users/services/UpdateUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    const { email, firstname, lastname, password, username } = request.body;

    const createUserService = container.resolve(CreateUserService);

    const {user, token} = await createUserService.execute({
      email,
      firstname,
      lastname,
      password,
      username
    });

    return response.json({user, token});
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { email, firstname, lastname, username } = request.body;
    const id = request.user.id;

    const updateUserService = container.resolve(UpdateUserService);

    const user = await updateUserService.execute({
      id,
      email,
      firstname,
      lastname,
      username,

    });

    return response.json(user);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;
    const showUserService = container.resolve(ShowUserService);

    const {user, posts, totalPosts} = await showUserService.execute(id);

    return response.json({user, posts, totalPosts});
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const id = request.user.id;

    const deleteUserService = container.resolve(DeleteUserService);

    const user = await deleteUserService.execute(id);

    return response.json(user);
  }

  async index(request: Request, response: Response): Promise<Response> {
    const indexUserService = container.resolve(IndexUserService);

    const posts = await indexUserService.execute();

    return response.json(posts);
  }
  
} 

export default UsersController;