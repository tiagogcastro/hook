// Cria as tipagens do metódo create para usar no repositories do typeorm e do ./repositories 
export default interface ICreateUserDto {
  user_id: string;
  description: string;
  content: any;
}