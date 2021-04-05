// Cria as tipagens do metódo create para usar no repositories do typeorm e do ./repositories 
export default interface ICreateUserDto {
  email: string;
  name: string;
  lastname: string;
  password: string;
}