import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
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
  async updateAvatar(request: Request, response: Response): Promise<Response> {
    const updateUserAvatar = container.resolve(UpdateUserAvatarService);
    const userId = request.user.id;
    const avatarFilename = request.file.filename;

    const user = await updateUserAvatar.execute({
      userId,
      avatarFilename
    });

    return response.json(user);
  }
} 

export default UsersController;