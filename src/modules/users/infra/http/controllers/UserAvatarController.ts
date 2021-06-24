import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class UserAvatarController {
  async update(request: Request, response: Response): Promise<Response> {
    const updateUserAvatar = container.resolve(UpdateUserAvatarService);
    const userId = request.user.id;
    const avatarFilename = request.file?.filename || '';

    const user = await updateUserAvatar.execute({
      userId,
      avatarFilename,
    });

    return response.json(user);
  }
}

export default UserAvatarController;
