class Imovel {

    constructor(endereco, tamanho){
        this.endereco = endereco;
        this.tamanho = tamanho; 

    }

    descricao(){
        throw new Error("Este método deve ser implementado por subclasses");    

    }

    //Metodo para validação de dados (encapsulamento de exceções )


}