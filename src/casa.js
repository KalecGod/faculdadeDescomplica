class casa {


    //Construtor define as propriedades

    constructor(cor,numQuarts,temGaragem){

        this.cor = cor;
        this.numQuarts = numQuarts;
        this.temGaragem = temGaragem;

    }

    // Metodo para escrever casa

    descrever(){
        let descricao = `Esta casa é de cor ${this.cor} , tem ${this.numQuarts} e quants ... `;

        if(this.temGaragem){

            descricao += `e Tem uma Garagem ${this.temGaragem}`
        }else
            descricao += `Não tem Garagem ${this.temGaragem}`

        return descricao;
    }
}
// Criação de Objetos (instâncias da Classe)

const minhaCasa = new casa("Verde",3,true);
const suaCasa = new casa("roxa",2,false)


//Manipulação dos Objetos e exibição das descrições 

console.log(minhaCasa.descrever());
console.log(suaCasa.descrever());
