// Arrays Lists na Pratica 

// Criar um array

let array1 = [];
let array2 = new Array();

console.log(array1);
console.log(array2);    

// Adicionando elementos ao array*

array1.push("Teste");
array1.push("Teste2");

array1.push ("Teste3");
console.log('\nArray após adicionar elementos: ',array1);+

console.log(array1.length); // Verifica o tamanho do array

//Acessar elementos de um array

console.log(array1[0]); // Acessa o primeiro elemento
console.log(array1[1]); // Acessa o segundo elemento

// Modificar elementos de um array

array1[0] = "Novo Teste";

console.log('\nArray após modificar o primeiro elemento: ', array1);

console.log(array1[0]); // Acessa o primeiro elemento modificado

 array1.pop(); // Remove o último elemento do array

console.log(array1)

array1.shift(); // Remove o primeiro elemento do array

console.log(array1); // Exibe o array após remover o primeiro elemento