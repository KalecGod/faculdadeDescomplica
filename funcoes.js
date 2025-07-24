// Definindo outra função regular com dois parâmetros

function soma (a,b){

    return a+b;
}

//Chamando a função soma e amrmazenando o resultado em uma variável
let resultado = soma(5, 10);

//Exibindo o resultado da função soma
console.log("Resultado da Soma : ",resultado); // Exibindo o resultado da função soma
console.log("Resultado da Soma : ",soma(5, 10)); // Exibindo o resultado da função soma

// Definindo uma função regular usando a palavra-chave function


function saudacao(nome){

    console.log("Olá, seja bem-vindo(a)"+nome+"!");
}

// Chamando a função saudacao e passando um argumento
saudacao("João");

//Definindo uma função regular sem parâmetros e sem retorno

function mensagem(){

    console.log("Olá, seja bem-vindo(a)!");
}

//Chamando a função mensagem 

mensagem(); // Exibindo a mensagem de boas-vindas
saudacao("Maria"); // Exibindo a saudação personalizada 