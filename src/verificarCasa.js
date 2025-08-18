//Função que simula uma operação assíncrona de verificação do status de uma casa

function verificarStatusDaCasa(casa){

    return new Promise((resolve,reject)=>{

        //Simulando uma operação assíncrona que leva 2 segudos para ser concluida

        setTimeout(()=>{
            const sucesso = Math.random() >0.5; //Simulando sucesso ou falhar aleatoriamente ;

            if(sucesso){
                resolve(`A casa localizada em ${casa.endereco} está em boas condições!`)
            }else{
                reject(`A casa localizada em ${casa.endereco} precisa de reparos.`)
            }

        },2000);

    });







}