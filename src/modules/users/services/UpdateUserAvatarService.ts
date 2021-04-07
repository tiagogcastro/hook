import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider'
import IUsersRepository from '../repositories/IUsersRepository'
import AppError from '@shared/errors'
import { inject, injectable } from 'tsyringe'
import User from '../infra/typeorm/entities/User'

interface IRequest {
	userId: string;
	avatarFilename: string;
}

@injectable()
class UpdateUserAvatarService{
	constructor (
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

		@inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}
	async execute({ userId, avatarFilename }: IRequest): Promise<User> {
		
		const user = await this.usersRepository.findByid(userId)

		if (!user) throw new AppError('Only autheticated users can change avatar.',' 401 unauthorized', 401)

		if (user.user_avatar) {
			await this.storageProvider.deleteFile(user.user_avatar);
		}

		await this.storageProvider.saveFile(avatarFilename);

		user.user_avatar = avatarFilename;

    await this.usersRepository.save(user);
		
		return user
	}
}

export default UpdateUserAvatarService