import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class SessionsController {
  async login(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticate = container.resolve(AuthenticateUserService);

    const { user, token } = await authenticate.execute({
      email,
      password,
    });

    return response.json({
      user,
      token,
    });
  }
}

export default SessionsController;
