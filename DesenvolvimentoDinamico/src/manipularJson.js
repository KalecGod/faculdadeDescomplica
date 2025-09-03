//Exemplo : Manipulação de Dados JSON

// Objeto JSON inicial

let pessoa = {
    "name":"João",
    "age":30,
    "city": {
        "road":"Rua Princial",
        "N°":70
    },
    "phone": ["81985888048","81987561808"]
}

console.log(pessoa)

// Acessar Dados
console.log("\nAcessar Dados: ")
console.log(pessoa.name);
console.log(pessoa["age"]);
console.log(pessoa.city.road);
console.log(pessoa["phone"][0])
console.log(pessoa["phone"][1])

// Adicionar Dados
console.log("\nAdicionar Dados:")
pessoa.email = "adalbertomc123@gmail.com"

console.log(pessoa);

// Modificar Dados
console.log("\nModificar Dados:")
pessoa.age = 27;
pessoa.city.road = "Secundario";
pessoa.city["N°"] = 71;

console.log(pessoa)

//Remover Dados 
console.log("\nRemover Dados:")
delete pessoa.phone

// Existência da Propriedade : se a propriedade não exisitir no objeto
// O operador delete não causará um erro , apenas não fará nada.
// O operador dele não pode ser usando para remover variáveis declaradas com var, let ou const
// Ele só funciona para propriedades de objetos.

console.log(pessoa)

// Operações com Arrays
console.log("\nOperações com Arrays")
pessoa.hobbies = ["leitura","esportes"];
console.log(pessoa.hobbies[1]);
pessoa.hobbies.push("viagens");
console.log(pessoa.hobbies);

// Iterar sobre as Propriedades do Objeto
console.log("\nIterar sobre as Propriedades do Projeto")

// for ...in não deve ser usado para iterar sobre arrays se a ordem dos elemetos for importante 
// Pois a ordem de iteração não é garantida.

for(let chave in pessoa){
    console.log(chave + " : "+pessoa[chave])
}

// Converter de e para JSON
console.log("\nConverter de e para JSON");
let jsonTexto = JSON.stringify(pessoa);

console.log(jsonTexto);

let objetoPessoa =JSON.parse(jsonTexto);
console.log(objetoPessoa)