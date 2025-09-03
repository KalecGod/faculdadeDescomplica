




 // Pode ser 'verde', 'amarelo' ou 'vermelho'
// Função que recebe a cor do semaforo e decide a ação do pedestre

function checkTrafficLight(lightColor) {
    switch (lightColor.toLowerCase()) {
         //Pode Atravessar, Prepare-se para parar ou Deve parar
        case 'verde':
            console.log("O semáforo está verde. Você pode atravessar.");
            break;
         //Prepare-se para parar
        case 'amarelo':
            console.log("O semáforo está amarelo. Prepare-se para parar.");
            break;
        // Pare/ Não atravesse a rua
        case 'vermelho':
            console.log("O semáforo está vermelho. Você deve parar.");
            break;
        // Caso a cor não seja reconhecida
        default:
            console.log("Cor do semáforo inválida. Por favor, use 'verde', 'amarelo' ou 'vermelho'.");
    }
}


// Exemplos de uso

checkTrafficLight('verde');   // O semáforo está verde. Você pode atravessar.
checkTrafficLight('amarelo'); // O semáforo está amarelo. Prepare-se para parar.
checkTrafficLight('vermelho'); // O semáforo está vermelho. Você deve parar.
checkTrafficLight('azul');    // Cor do semáforo inválida. Por favor
