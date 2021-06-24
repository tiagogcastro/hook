import DeleteUserProfileService from '@modules/users/services/DeleteUserProfileService';
import FeedUserService from '@modules/users/services/FeedUserService';
import ShowUserProfileService from '@modules/users/services/ShowUserProfileService';
import UpdateUserProfileService from '@modules/users/services/UpdateUserProfileService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class UsersController {
  async update(request: Request, response: Response): Promise<Response> {
    const { 
      email, firstname, lastname, username, password, old_password, password_confirmation
    } = request.body;
    const user_id = request.user.id;

    const updateUserProfile = container.resolve(UpdateUserProfileService);

    const user = await updateUserProfile.execute({
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
    const showUserProfile = container.resolve(ShowUserProfileService);

    const {user, posts, totalPosts} = await showUserProfile.execute(user_id);

    return response.json({user, posts, totalPosts});
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const id = request.user.id;

    const deleteUserProfile = container.resolve(DeleteUserProfileService);

    const user = await deleteUserProfile.execute(id);

    return response.json(user);
  }

  async index(request: Request, response: Response): Promise<Response> {
    const feedUser = container.resolve(FeedUserService);

    const posts = await feedUser.execute();

    return response.json(posts);
  }
  
} 

export default UsersController;