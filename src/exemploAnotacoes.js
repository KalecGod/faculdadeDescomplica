


// Exemplo de comentarios em JavaScript

// Este é um comentário de linha única

let exemploUmaLinha = "Este é um exemplo de comentário de linha única"; // Comentário após uma linha de código  




/*
   Comentario de múltiplas linhas
   é utilizado principalmente para documentação do código
   ou explicação sinoke que não são intuitivas do código
*/  

/* 
  A função abaixo soma dois números.
  Ela recebe dois parâmetros: a e b.
  Retorna a soma de a e b.     
*/

function soma(a, b) {
  return a + b;
}   

console.log("Resultado Soma :",soma(2, 5)); // Chamada da função soma com os argumentos 2 e 5

// Chamada da função somar com exemplos 

/**
 * Subtrai o segundo número do primeiro.
 * 
 * @param {number} a - O número do qual subtrair.
 * @param {number} b - O número a ser subtraído.
 * * @returns {number} A diferença entre a e b.
 * 
 * @example
 * // Exemplo de uso:   
 * subtrai(10, 5); // Retorna 5
 * subtrai(5, 10); // Retorna -5
 */

function subtrai(a, b) {
  return a - b;
}   

// Chamda de função para exemplificação

let resultadoSoma = soma(40,2);

console.log("Resultado Soma :",resultadoSoma); // Exibe o resultado da soma no console

// Exemplo de chamada da função subtrai
let resultadoSubtrai = subtrai(10, 4);

console.log("Resultado da subtração:", resultadoSubtrai); // Exibe o resultado da subtração no console