import CreateUserService from '@modules/users/services/CreateUserService';
import ListAllUsersService from '@modules/users/services/ListAllUsersService';

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

  async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listAllUsersService = container.resolve(ListAllUsersService);

    const users = await listAllUsersService.execute(user_id);

    return response.json(users);
  }
} 

export default UsersController;