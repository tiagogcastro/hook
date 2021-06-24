type TStatusCode =
  | '201 success'
  | '202 create'
  | '301 moved permanently'
  | '302 moved'
  | '400 bad request'
  | '401 unauthorized'
  | '404 not found'
  | '500 internal server error';

export default class AppError {
  public readonly message: string;

  public readonly status: string;

  public readonly statusCode: number;

  constructor(message: string, status: TStatusCode, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
    this.status = status;
  }
}
