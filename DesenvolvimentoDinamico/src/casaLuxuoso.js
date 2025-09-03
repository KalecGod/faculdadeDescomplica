// Casa base "Casa"

class casa{
    constructor(cor,numQuarto,temGaragem){
        this._cor = cor;
        this._numQuarto = numQuarto;
        this._temGaragem = temGaragem;

    }

    //Gets & Sets  
    get cor(){
        return this._cor;
    }

    set cor(novaCor){
        this._cor = novaCor;
    }

    get numQuarto (){

        return this._numQuarto;

    }
    set numQuarto(novoQuarto){
        this._numQuarto = novoQuarto;
    }

    get temGaragem(){
        return this._temGaragem;


    }
    set temGaragem(novaGaragem){

        this._temGaragem = novaGaragem;
    }

    // Metodos para Descrever a Casa

    descrever(){

        let descricao = `Esta Casa é de cor ${this._cor}, tem ${this._numQuarto} Quartos`;

        if(this._temGaragem){
            descricao += "e tem uma Garagem";
    
        }else{
            descricao += "Não tem Garagem";
        }
            return descricao;

    }

}
// Classe Derivada "Casa Luxuosa" que herda de "Casa";

class CasaLuxuosa extends casa{

    constructor(cor,numQuarto,temGaragem,temPiscina){


        //Chama o Construtor da classe base
        super(cor, numQuarto,temGaragem);

        //Propriedade adicional especifica da Classe derivada;
        this._temPiscina = temPiscina;

    }

    get temPiscina(){
        return this._temPiscina;

    }

    set temPiscina(novaPiscina){

        this._temPiscina = novaPiscina;

    }
    // Sobrescrita do metodo descever para incluir a piscina

    descrever(){
        let descricao = super.descrever()// Chama o metodo descrever da classe base
        if(this._temPiscina){
            descricao += "Também tem uma Piscina"
        }else{
            descricao += "Não tem uma Piscina"
        }
        return descricao
    }

}

// Criação  de Objeto (instancias das classes);

let minhaCasa = new casa("Azul",3,true);
let casaLuxuosa = new CasaLuxuosa("Branco",5,true,true);

// Manipulação dos objetos e exibição das descriçoes 

console.log(minhaCasa.descrever());
console.log(casaLuxuosa.descrever());

