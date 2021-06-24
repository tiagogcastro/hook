import { container } from 'tsyringe';
import EtherealMailProvider from './implementations/EthrealMailProvider';
import IMailProvider from './models/IMailProvider';

container.registerSingleton<IMailProvider>(
  'MailProvider',
  EtherealMailProvider,
);
