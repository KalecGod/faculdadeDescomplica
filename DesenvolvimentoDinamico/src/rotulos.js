//Imagine que você está organizando uma festa de aniversário

//Os blocos de código são como diferentes áreas da festa, onde diferentes atividades acontencem.
//Por exemplo, você pode ter uma área para dançar, uma área para jogos e uma área para comer

{
// Área para dançar
console.log("Bem-vindo à pista de dança!");
// Aqui vão as instruções para a pista de dança
}

{
// Área para jogos
console.log("Vamos jogar alguns jogos!");   
// Aqui vão as instruções para os jogos
}
{
// Área para comer
console.log("Hora de comer!");
// Aqui vão as instruções para a comida
}
//Imagine que voce tem uma competição de dança e uma competição de jogos acontencendo ao mesmo tempo

dance: 
 for(let i = 0; i < 3; i++) {
    jogos:
    for(let j = 0; j < 3; j++) {
        if( i === 1 && j ===1){
            console.log("A competição de dança foi interrompida!");
            break dance; // Interrompe a competição de dança    
        }
        console.log(`Competidor de dança ${i + 1} está dançando e Competidor de jogos ${j + 1} está jogando!`);
    }
 }

