// Arrow functions in JavaScript


// Exemplo básico de uma arrow function que soma dois números 

let somar = (a,b) => {

    return a + b;
}
//Chamando a função e exibindo o ressultado no console 

console.log(somar(5, 3)); // Saída: 8           

// Exemplo de uma arrow function com um parâmetro(não precisa de parênteses )

let dobrar = n => n * 2;    

// Chamando a função e exibindo o resultado no console

console.log(dobrar(5)); // Saída: 8

// Exemplo de uma arrow function usada como callback

let numeros = [1, 2, 3, 4, 5];

// Usando arrow function com o método map para dobrar os valores do array
let numerosDobrados = numeros.map(n => n*2)

// Exibindo o arrays resultante no console
console.log(numerosDobrados); // Saída: [2, 4, 6, 8, 10]

// Arrow function com corpo de função mais complexo
    let saudacao = (nome,idade) => {
        let mensagem = `Olá, ${nome}! Você tem ${idade} anos.`;
        return mensagem;
    };

//Chamando a função e exibindo o resultado no console   

console.log(saudacao("João", 25)); // Saída: Olá, João! Você tem 25 anos.  


