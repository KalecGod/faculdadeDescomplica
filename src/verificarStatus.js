// Função que simula uma operação assíncrona de verificação do status de uma casa

function verificarStatusDaCasa(casa){
    return new Promise((resolve,reject)=>{

        //Simulando uma opereção assíncrona que leva 2 segundos para ser concluída.
        setTimeout(()=>{
            const sucesso =Math.round() > 0.5; // Simulando sucesso ou falha de forma aleatória.

            if(sucesso){
                resolve(`A casa localizada em ${casa.endereco} está em boas condições!`);

            }else{
                reject(`A casa localizada em ${casa.endereco} precisa de reparos.`)
            }
        },2000);
    });
}

//Função que simula uma operação assíncrona de inspeção da casa

function inspecionarCasa(casa){

    return new Promise((resolve,reject)=>{

        //Simulando uma operação assincrona que leva 1 segundo para ser concluida
        setTimeout(()=>{

            resolve(`Inspeção de casa Localizada em ${casa.endereco} Concluída`);

        },1000 );

    });
}

//Função que simula uma operação assincrona de reparos na casa

function repararCasa(casa){

    return new Promise((resolve)=>{
        //Simulando uma operação assincrona que leva e segundos para ser concluida.
        setTimeout(()=>{
            resolve(`Reparos na casa localizada em ${casa.endereco} foram concluídos.`)
        },3000);
    });
}


// Classe "Casa"
class Casa{

    constructor(endereco,cor,numeroDeQuartos,temGaragem){

        this.endereco = endereco;
        this.cor = cor;
        this.numeroDeQuartos = numeroDeQuartos;
        this.temGaragem = temGaragem;
    }

    //Metodos para descrever a casa

    descrever(){
        let descricao = `Casa localizada em ${this.endereco}, de cor ${this.cor}, 
        com ${this.numeroDeQuartos} quartos`;

        descricao += this.temGaragem ? "e possui Garagem" : "Não possui Garagem";
    
        return descricao;
    }
    //metodo para verificar o status da casa

    verificarStatus(){
        verificarStatusDaCasa(this)
        .then((resultado)=>{
            console.log(resultado); //Saída : A casa está em boas condições!
            
            return inspecionarCasa(this);
        })
        .then((resultadoInspecao)=>{
            console.log(resultadoInspecao); //Saída : Inspeção da casa Concluida.
        })
        .catch((erro)=>{
            console.log(erro); // Saída : A casa precisa de reparos.
            return repararCasa(this);
        })
        .then((resultadoReparo)=>{
            if(resultadoReparo){
                console.log(resultadoReparo)//Saída : Reparos na casa foram concluída.
                return inspecionarCasa(this);
            }
        })
        .then((resultadoFinalInspecao)=>{
            if(resultadoFinalInspecao){
                console.log(resultadoFinalInspecao);// Saída : Inspeção da casa conluída após reparos.
                return inspecionarCasa(this);
            }
        })
        .catch((erro)=>{
            console.log(`Erro Final: ${erro}`);
        });
    }
}

//Criação de um objeto (Instancia da classe casa)

const minhaCasa= new Casa("Rua A,123","Azul",3,true);

//Manipulação do objeto e exibiçao da descrição
console.log(minhaCasa.descrever());

//Verificação do status da casa utilizando a promessa encadeada
minhaCasa.verificarStatus();