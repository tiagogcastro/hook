// Cria a interface do usuário sem depender do typeorm.
// No typeorm só vai depender dessa interface.

import ICreateUserDto from '../dtos/ICreateUserDTO';

export default interface IUsersRepository {
  create(data: ICreateUserDto): Promise<void>;
}