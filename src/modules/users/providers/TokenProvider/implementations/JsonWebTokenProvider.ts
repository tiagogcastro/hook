import { SignOptions, sign } from 'jsonwebtoken';

import ITokenProvider from '../models/ITokenProvider';

class JsonWebTokenProvider implements ITokenProvider {
  async generateSignToken(
    payload: string | object, 
    secretOrPrivateKey: string, 
    options?: SignOptions | undefined
  ): Promise<string> {
    const token = sign(payload, secretOrPrivateKey, options);
    return token;
  }
}

export default JsonWebTokenProvider;