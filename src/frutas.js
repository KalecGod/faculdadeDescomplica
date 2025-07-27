// Exemplo de uso de método Slide()

//Temos uma string com varias frutas

let frutas = "maçã, morango, uva, laranja, abacaxi"

console.log(frutas.length)

//Queremos Obter uma parte da String .

let parteFruta = frutas.slice(6,20)
console.log(parteFruta)


//Exemplo de uso do método trim

let frutaComEspaco = "            Abacate            "

// Queremos remover o Espaço

let frutaSemEspaco = frutaComEspaco.trim();

console.log(frutaSemEspaco)

//String com Vírgulas 

let listaDeFruta = "Maçã,Pera,Limão,Uva,Laranja";

let arrayDeFrutas = listaDeFruta.split(",");

console.log(arrayDeFrutas)
