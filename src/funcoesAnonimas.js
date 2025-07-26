// Declaração de uma Variável chamada resultado e atribuindo uma função anônima a ela

    let somarParametro = function(parametro1, parametro2) {
        console.log("Parametro 1: " + parametro1);
        console.log("Parametro 2: " + parametro2);

        let resultado = parametro1 + parametro2;        

        console.log("Resultado: " + resultado);
        return resultado;

    };

// Chamada da função anônima atraves da variável

let resultado = somarParametro(10, 20);
console.log("Resultado da chamda da função : " + resultado);

//Definindo uma função que aceita outra função como argumento 

function executarFuncao(funcao,valor1, valor2) {

  console.log("\nExecutando a função passada como argumento ou parâmetro");

    return funcao(valor1, valor2);  

}

//Passando a função anônima como argumentto para outra função

let resultadoExecucao =executarFuncao(somarParametro, 30, 40);
console.log("Resultado da execução da função passada como argumento: " + resultadoExecucao);

//Definindo e chamando uma função anônima imediantamente 

let resultadoImediato = (function(a,b){console.log("\nFunção de chamada imediata");
    return a * b;})(5, 6);
console.log("Resultado da função anônima imediantamente chamada: " + resultadoImediato);

