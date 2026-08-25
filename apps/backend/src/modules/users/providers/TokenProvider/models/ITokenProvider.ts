export default interface ITokenProvider {
  generateSignToken(
    payload: string | object,
    secretOrPrivateKey: string,
    options?: object | undefined,
  ): Promise<string>;
}
