// Calculadora em javaScript

// Função que simula a operação de uma calculadora

function calculadora (num1, num2) {

    let adicao = num1 + num2;
    let subtracao = num1 - num2;
    let multiplicacao = num1 * num2;
    let divisao = num1 / num2;
    let modulo = num1 % num2;
    let exponenciacao = num1 ** num2;
    
    // Incremento e Descremento

    //Vamos incrementar num1
     let incremento = num1;
        incremento++;

     // vamos decrementar num2
     let decrementoNum2 = num2;
        decrementoNum2--;

    // Exibindo os resultados do console
     console.log(`Adição (${num1} + ${num2}): ${adicao}`);
     console.log(`Subtração (${num1} - ${num2}): ${subtracao}`);
     console.log(`Multiplicação (${num1} * ${num2}): ${multiplicacao}`);
     console.log(`Divisão (${num1} / ${num2}): ${divisao}`);
     console.log(`Módulo (${num1} % ${num2}): ${modulo}`);
     console.log(`Exponenciação (${num1} ** ${num2}): ${exponenciacao}`);
     console.log(`Incremento de num1: ${incremento}`);   
     console.log(`Decremento de num2: ${decrementoNum2}`);

     // Verificando se a adição é maior que 10
     if(adicao >10){
        console.log(`A adição é maior que 10: ${adicao}`);
     }else {
        console.log(`A adição não é maior que 10: ${adicao}`);
     }
}
// Executando a função calculadora

calculadora(10,5);
 