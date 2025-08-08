//Classe base "Imovel"

class Imovel{

    constructor(endereco,tamanho){
        this.endereco = endereco;
        this.tamanho = tamanho;


    }
    //Metodo abstrato para descrever o immovel (deve ser implementado nas subclasses)

    descrever(){

        throw new Error("Esse Metodo deve ser implementado por subClasses")

    }
}

//Classe derivada "Casa" que herda de "Imovel"

class Casa extends Imovel{

    constructor(endereco,tamanho,cor,numeroDeQuartos,temGaragem){
        super(endereco,tamanho);
        this.cor = cor;
        this.numeroDeQuartos = numeroDeQuartos;
        this.temGaragem = temGaragem;

    }
    //IImplementação do metodo descever
    descrever(){
        let descricao = `Casa Localizada ${this.endereco},
        de cor ${this.cor}, com ${this.numeroDeQuartos} quartos , de tamanho ${this.tamanho}m2`;

        //Operador ternario

        descricao += this.temGaragem ? "e possui garagem." : "e não possui garagem.";

        return descricao
    }
}

//Classe derivada "Apartamento" que herda "Imovel"

class Apartamento extends Imovel{

    constructor(endereco,tamanho,numeroAndar,numeroDeQuartos,possuiElevador){
        super(endereco,tamanho);

        this.numeroAndar = numeroAndar;
        this.numeroDeQuartos = numeroDeQuartos;
        this.possuiElevador = possuiElevador;
    }

    //Implementação do metodo descrever;

    descrever(){
        let descricao = `Apartamento Localizado em ${this.endereco}, no ${this.numeroAndar}, com ${this.numeroDeQuartos} Quartos,
        no tamanho ${this.tamanho}m2`;

        descricao += this.possuiElevador ? " e Possui Elevador" : "Não possui Elevador";

        return descricao;
    }
}

// funções para descrever um imovel(Polimorfismo)

function desceverImovel(imovel){
    console.log(imovel.descrever());
}

//Criação de Objetos (Instancia das classes)

const minhaCasa = new Casa("Rua A, 123",120,"Azul",3,true);
const meuApartamento = new Apartamento("Avenida B, 456",85,7,4,true);

//Manipulação dos Objetos e exibição das descrições usando Polimoprfismo

desceverImovel(minhaCasa);
console.log();
desceverImovel(meuApartamento);

