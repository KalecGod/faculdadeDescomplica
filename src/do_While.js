//Imagine que voce esta tentando aprender a andar de bicicleta
//Você decide praticar até conseguir andar sem cair 

let tentativas = 0;
let caiu = false;

do{

    console.log(`Tentativa número ${tentativas + 1}`);
    tentativas++;

    // Simula a chance de cair
    if(Math.random() < 0.3) {
        caiu = true;
        console.log("Você caiu da bicicleta!");
    } else {
        console.log("Você conseguiu andar sem cair!");
    }

    if(tentativas === 10 && !caiu) {
        console.log("Você aprendeu a andar de bicicleta sem cair!");
    }

}while(tentativas < 10 && !caiu);