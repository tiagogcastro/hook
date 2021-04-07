import AppError from '@shared/errors';
import FakeUsersRepository from '../../repositories/fakes/FakeUsersRepository';
import CreateUserService from '../CreateUserService';

describe('CreateUser', () => {
  it('Should be able to create new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository()
    const createUser = new CreateUserService(fakeUsersRepository);

    const user = await createUser.execute({
      email: 'example123@example.com',
      firstname: 'example firstname',
      lastname: 'example lastname',
      password: 'example123',
      username: '@example123'
    });

    expect(user).toHaveProperty('id');
  });

  it('Should not be able to create a new user with same email from another', async () => {
    const fakeUsersRepository = new FakeUsersRepository()
    const createUser = new CreateUserService(fakeUsersRepository);

    await createUser.execute({
      email: 'example1@example.com',
      firstname: 'example firstname',
      lastname: 'example lastname',
      password: 'example1',
      username: 'example1'
    });

    expect(
      createUser.execute({
      email: 'example1@example.com',
      firstname: 'example firstname',
      lastname: 'example lastname',
      password: 'example1',
      username: 'example1'
    })).rejects.toBeInstanceOf(AppError);
  });

  // it('Should not be able to create a new user with same username from another', async () => {
  //   const fakeUsersRepository = new FakeUsersRepository()
  //   const createUser = new CreateUserService(fakeUsersRepository);

  //   await createUser.execute({
  //     email: 'example2@example.com',
  //     firstname: 'example firstname',
  //     lastname: 'example lastname',
  //     password: 'example1',
  //     username: 'example1'
  //   });

  //   expect(
  //     createUser.execute({
  //     email: 'example1@example.com',
  //     firstname: 'example firstname',
  //     lastname: 'example lastname',
  //     password: 'example1',
  //     username: 'example1'
  //   })).rejects.toBeInstanceOf(AppError);
  // });
});