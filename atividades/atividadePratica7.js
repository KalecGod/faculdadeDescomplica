// Fixando entendimento de Arrays

// Objetivo : Praticar conceitos de Arrays

let arrays = []

console.log("Adicionando elementos ao array");

let pessoa= {
    "name" : "Joao",
    "idade" : 30,
    "profissao" : "Desenvolvedor"

}
arrays.push(pessoa);

pessoa = {
    "name" : "Maria",
    "idade" : 25,
    "profissao" : "Designer"
};
arrays.push(pessoa);
console.log(arrays);

pessoa = {
    "name": "Adalberto",
    "age": 30,
    "city": {
        "road": "Rua Principal",
        "N°": 70
    },
    "phone": ["81985888048", "81987561808"]
}

arrays.unshift(pessoa);

console.log(arrays);

// Removendo elementos do array
console.log("Removendo elementos do array");
arrays.pop();

console.log(arrays.length);
console.log(arrays);
// Removendo o primeiro elemento do array
console.log("Removendo o primeiro elemento do array");
arrays.shift();


console.log(arrays.length);
console.log(arrays);
