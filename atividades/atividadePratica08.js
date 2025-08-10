//Código exemplo:

class Carro {
    constructor(cor, marca, ano) {

        this.cor = cor;
        this.marca = marca;
        this.ano = ano;

    }
    acelerar() { 

   return "Acelerando...";
}
  
};


let carro1 = new Carro("Vermelho", "Ford", 2020);
let carro2 = new Carro("Azul", "Chevrolet", 2018);  


    console.log(carro1.acelerar());
    console.log(carro2.acelerar());