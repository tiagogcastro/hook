# Dados pra copiar
✔️
**RF**


**RNF**


**RN**



# Usuário (no geral)

**RF**
- O usuário deve poder criar uma conta informando firstname, lastname, email, password e username; ✔️
- O usuário deve poder fazer login na aplicação informando o email e password; ✔️
- O usuário deve poder visualizar o perfil de qualquer pessoa; ✔️

- O usuário deve poder listar todos os usuários, menos ele mesmo; ✔️

**RNF**
- Usar JsonWebToken para geração de tokens; ✔️
- Usar bycrypt para criptografar a senha do usuário; ✔️

**RN**
- O usuário não deve poder criar uma conta com um e-mail já existente; ✔️
- O usuário não deve poder criar uma conta com um username já existente; ✔️
- O usuário deverá ter a senha criptografada após a criação da conta; ✔️
- Deve gerar um token de acesso após a criação da conta; ✔️

# Perfil do Usuário

**RF**
- O usuário deve poder visualizar seu perfil; ✔️
- O usuário deve poder atualizar seu perfil informando firstname, lastname, email e username; ✔️

- O usuário deve poder atualizar sua senha; ✔️
- Não deve ser obrigatório atualizar a senha no perfil; ✔️

- O usuário deve poder atualizar seu avatar; ✔️

**RNF**
- Usar bycrypt para criptografar a senha do usuário; ✔️

**RN**
- O usuário não deve poder atualizar o e-mail do seu perfil com um já existente e diferente do seu; ✔️
- O usuário não deve poder atualizar o username do seu perfil com um já existente e diferente do seu; ✔️

- O usuário deve informar e confirmar a nova senha e informar a antiga para atualizar sua senha; ✔️
- O usuário deverá ter a senha criptografada após a atualização do perfil; ✔️

- Deve deletar o avatar antigo e adicionar o novo na atualização do avatar; ✔️


# Posts do usuário
**RF**
- O usuário deve poder criar um post informando uma descrição e até 6 imagens; ✔️
- O usuário deve poder deletar um post; ✔️

**RNF**


**RN**

# Recuperação de senha do usuário

**RF**
- Deve ser possível o usuário recuperar a senha informando o e-mail;
- O usuário deve receber um e-mail com o passo a passo para a recuperação da senha;
- O usuário deve conseguir inserir uma nova senha;

**RNF**
- Usar Ethreal mail para envio de e-mail em desenvolvimento;
- Usar Amazon ses para envio de e-mail em produção


**RN**
- O usuário precisa informar uma nova senha;
- O link enviado para a recuperação deve expirar em 2 horas;