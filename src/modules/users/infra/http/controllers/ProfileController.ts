import DeleteUserService from '@modules/users/services/DeleteUserService';
import IndexUserService from '@modules/users/services/IndexUserService';
import ShowUserService from '@modules/users/services/ShowUserProfileService';
import UpdateUserService from '@modules/users/services/UpdateUserProfileService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class UsersController {
  async update(request: Request, response: Response): Promise<Response> {
    const { 
      email, firstname, lastname, username, password, old_password, password_confirmation
    } = request.body;
    const user_id = request.user.id;

    const updateUserService = container.resolve(UpdateUserService);

    const user = await updateUserService.execute({
      user_id,
      email,
      firstname,
      lastname,
      username,
      password,
      old_password,
      password_confirmation
    });

    return response.json(user);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;
    const showUserService = container.resolve(ShowUserService);

    const {user, posts, totalPosts} = await showUserService.execute(user_id);

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