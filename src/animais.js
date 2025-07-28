// Criação de Strings com nomes de animais 

let animal1 = "Elefante";
let animal2 = "Girafa";
let animail3 = "Zebra";

//Exemplos de método substring();
//Pega parte da string "Elefante" , começando no índice 3 até o índice 7

let parteAnimal = animal1.substring(3,7);

console.log(`Animal : ${parteAnimal}`)

//Exemplos de método replace();
//Substituir a substring "ra" por "re" em Girafa
let novoAnimal = animal2.replace("ra","re")

console.log(`Animal : ${novoAnimal}`)

//Exemplos de método concat();
//Concatena as Strings

let concatenaString = animal1.concat(" ",animal2," ",animail3)

console.log(`Animal : ${concatenaString}`)

