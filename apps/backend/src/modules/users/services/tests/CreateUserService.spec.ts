import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import FakeTokenProvider from '@modules/users/providers/TokenProvider/fakes/FakeTokenProvider';
import AppError from '@shared/errors';
import FakeUsersRepository from '../../repositories/fakes/FakeUsersRepository';
import CreateUserService from '../CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let fakeTokenProvider: FakeTokenProvider;
let createUser: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    fakeTokenProvider = new FakeTokenProvider();
    createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
      fakeTokenProvider,
    );
  });
  it('should be able to create new user', async () => {
    const create = await createUser.execute({
      email: 'example123@example.com',
      firstname: 'example firstname',
      lastname: 'example lastname',
      password: 'example123',
      username: 'example123',
    });

    expect(create.user).toHaveProperty('id');
    expect(create.token);
  });

  it('should not be able to create a new user with same email from another', async () => {
    await createUser.execute({
      email: 'example1@example.com',
      firstname: 'example firstname',
      lastname: 'example lastname',
      password: 'example1',
      username: 'example1',
    });

    expect(
      createUser.execute({
        email: 'example1@example.com',
        firstname: 'example firstname',
        lastname: 'example lastname',
        password: 'example1',
        username: 'example1',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a new user with same username from another', async () => {
    await createUser.execute({
      email: 'example2@example.com',
      firstname: 'example firstname',
      lastname: 'example lastname',
      password: 'example1',
      username: 'example1',
    });

    expect(
      createUser.execute({
        email: 'example1@example.com',
        firstname: 'example firstname',
        lastname: 'example lastname',
        password: 'example1',
        username: 'example1',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
