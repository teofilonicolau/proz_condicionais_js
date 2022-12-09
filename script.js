//Criem mais duas variáveis que salvem a senha e permissões do usuário (ou seja, se tem permissões de um usuário comum, ou de um administrador do sistema). Lembrem que um usuário deve poder mudar sua senha à vontade, mas as permissões são atribuídas apenas na criação do usuário e não podem ser alteradas depois. 

 

/*Na sequência, criem duas novas estruturas
condicionais. A primeira estrutura 
deve imprimir a mensagem “Por favor, 
insira sua nova senha” caso o username
e a senha estejam corretos,
e “Username / senha incorretos” caso
um dos dois não esteja correto. 
A segunda estrutura condicional 
deve imprimir a mensagem “Você 
não pode acessar esta parte do sistema”
caso o usuário não tenha permissões de 
administrador, e a mensagem “Bem-vindo(a)
à área de administrador” caso tenha sim as permissões necessárias. */

const id = 1;
let username = 'Teo';
senha = 1234;
const adm = true;

username = 'Miguel';
console.log(username);


if(id == 1 || username == 'Teo'){
  console.log('Deseja mudar sua senha ?')
} else{
  
  console.log('Não autorizado')
}

if((username == 'Miguel')&&(senha == 1234)){
  console.log('Por favor insira sua nova senha');
} else{
  console.log('username/senha incorretos')
}


if(adm == true){
  console.log('Bem vindo a área de adm')
} else{
  console.log('Não tem permissão!')
}
