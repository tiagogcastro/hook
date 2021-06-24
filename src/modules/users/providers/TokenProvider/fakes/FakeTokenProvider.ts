import ITokenProvider from '../models/ITokenProvider';

export default class FakeTokenProvider implements ITokenProvider {
  async generateSignToken(): Promise<string> {
    return 'This-is-a-token';
  }
}
