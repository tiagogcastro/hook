import path from 'path';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import AppError from '@shared/errors';
import { inject } from 'tsyringe';
import IUsersRepository from '../repositories/IUsersRepository';

class ForgotPasswordService {
  constructor(
    @inject('MailProvider')
    private mailProvider: IMailProvider,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    ) {}
  async execute(email: string): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);
    if(!user) {
      throw new AppError('Este usuário não existe', '401 unauthorized', 401);
    }

    const forgotPasswordTemplate = path.resolve(__dirname, '..', 'views', 'forgotPassword.hbs');

    await this.mailProvider.sendMail({
      to: {
        email,
        name: user.firstname
      },
      from: {
        email,
        name: user.firstname,
      },
      subject: '[Hook] Recuperação de senha',
      templateData: {
        variables: {
          name: user.firstname,
          link: `http://localhost:3000/reset-password?token=${email}`
        },
        file: forgotPasswordTemplate,
      },
    });

  }
}

export default ForgotPasswordService;