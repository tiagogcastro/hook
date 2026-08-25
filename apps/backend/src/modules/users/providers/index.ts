import { container } from 'tsyringe';
import ITokenProvider from '@modules/users/providers/TokenProvider/models/ITokenProvider';
import JsonWebTokenProvider from '@modules/users/providers/TokenProvider/implementations/JsonWebTokenProvider';
import BcryptHashProvider from './HashProvider/implementations/BcryptHashProvider';
import IHashProvider from './HashProvider/models/IHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BcryptHashProvider);
container.registerSingleton<ITokenProvider>(
  'TokenProvider',
  JsonWebTokenProvider,
);
