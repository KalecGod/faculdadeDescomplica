// ========== Motos ==========

class Motos{

    constructor(modelo,marca,placa,anoFabricacao,cor){

        this.modelo = modelo;
        this.marca = marca;
        this.placa = placa;
        this.anoFabricacao = anoFabricacao;
        this.cor = cor;

    }


    // GETTERS
    get getModelo(){
        return this.modelo
    }

    get getMarca(){
        return this.marca
    }

    get getPlaca(){
        return this.placa
    }

    get getAnoFabricacao(){
        return this.anoFabricacao
    }

    get getCor(){
        return this.cor
    }

    // SETTERS
    set setModelo(modelo){
        this.modelo = modelo
    }

    set setMarca(marca){
        this.marca = marca
    }

    set setPlaca(placa){
        this.placa = placa
    }

    set setAnoFabricacao(anoFabricacao){
        this.anoFabricacao = anoFabricacao
    }

    set setCor(cor){
        this.cor = cor
    }

}


// ========== Cliente (múltiplas motos, privadas e validação) ==========
class Cliente {

    #motos = [];
    #placas = new Set(); // guarda placas normalizadas
 
    constructor(nomeCompleto,idade,cpf,endereco,Motos = []){

        this.nomeCompleto = nomeCompleto;
        this.idade = idade;
        this.cpf = cpf;
        this.endereco = endereco;
        
        if(Array.isArray(motos)){
        motos.forEach((m) => this.addMoto(m));

    }

}

}