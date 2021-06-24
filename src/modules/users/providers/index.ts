import { container } from 'tsyringe';
import BcryptHashProvider from './HashProvider/implementations/BcryptHashProvider';
import IHashProvider from './HashProvider/models/IHashProvider';

import ITokenProvider from '@modules/users/providers/TokenProvider/models/ITokenProvider';
import JsonWebTokenProvider from '@modules/users/providers/TokenProvider/implementations/JsonWebTokenProvider';

container.registerSingleton<IHashProvider>('HashProvider', BcryptHashProvider);
container.registerSingleton<ITokenProvider>('TokenProvider', JsonWebTokenProvider);
