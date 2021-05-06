import CreateUserService from '@modules/users/services/CreateUserService';

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
} 

export default UsersController;