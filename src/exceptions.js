class Imovel {

    constructor(endereco, tamanho){
        this.endereco = endereco;
        this.tamanho = tamanho; 

    }

    descricao(){
        throw new Error("Este método deve ser implementado por subclasses");    

    }

    //Metodo para validação de dados (encapsulamento de exceções )

    validar(){

        if(!this.endereco || !this.tamanho){
            throw new Error("Endereço e tamanho são obrigatórios");
        }
    }
}

// Classe derivada "Casa" que herda de "Imovel"

class Casa extends Imovel {

    constructor(endereco,tamanho,cor, numeroDeQuartos, temGaragem){
        super(endereco, tamanho);
        this.cor = cor;
        this.numeroDeQuartos = numeroDeQuartos;
        this.temGaragem = temGaragem;
    }   

  
/*
    descrever(){
    
    let descricao = `Casa localizada e, ${this.endereco}, de cor ${this.cor} ,
    com ${this.numeroDeQuartos} quartos , de tamanho ${this.tamanho}m2`;
    
    descricao += this.temGaragem ? " e tem garagem." : " e não tem garagem.";

    return descricao;
    }

*/

// Implementação do método descrever 
  descrever() {
    try {
        this.validar();

        let descricao =  `Casa localizada em ${this.endereco}, de cor ${this.cor}, com ${this.numeroDeQuartos} quartos ,
        de tamanho ${this.tamanho}m²`;

        descricao += this.temGaragem ? " e possui garagem." : " e não possui garagem.";

        return descricao;
    }catch (error) {

        throw new Error(`Erro ao descrever a casa: ${error.message}`);

    }
}
}






 class Apartamento extends Imovel{

    constructor(endereco,tamanho, numeroDeAndar , possuiElevador){
        super(endereco, tamanho);
        this.numeroDeAndar = numeroDeAndar;
        this.possuiElevador = possuiElevador;
    }

    // Implementação do método descrever

    descrever(){
        try{

            this.validar();

            let descricao = `Apartamento localizada em ${this.endereco},
            no ${this.numeroDeAndar} andar , de tamanho ${this.tamanho}m2`;

            descricao += this.possuiElevador ? " e Possuir Elevador" : " Não possui elevador"

            return descricao

        }catch(error){

        throw new Error(`Erro ao descrever o apartamento : ${error.message}`)
    }
    }
} 
/* 
     function descreverImovel(imovel){
        console.log(imovel.descrever)

     }
*/

// função para descrever um imovel (exemplificando polimorfimos)

function descreverImovel (imovel){

    try{
        console.log(imovel.descrever())

    }catch(error){
        console.log(error.message)
    }
}

// Criação de Objetos (instancias das classes)

 let minhaCasa = new Casa("Road A, 70",120,"Blue",4,true)
 let meuApartamento = new Apartamento("Road B , 500",420,10,true)

// Manipulação dos Objetos e Exibição das descrições usando polimorfismo 

    descreverImovel(minhaCasa);
    descreverImovel(meuApartamento)



    // Criação de um Objetos com dados invalidos para demonstrar o encapsulamento de exceçoes 

    let casaInvalida = new Casa ("",0,"Green",2,false);

    descreverImovel(casaInvalida)
