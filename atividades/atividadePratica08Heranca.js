

class Carro {
    constructor(cor, marca, ano) {
        this.cor = cor;
        this.marca = marca;
        this.ano = ano;
    }
}

class carroLuxo extends Carro {

    constructor(motor, portas,arcondicionado, cor, marca, ano) {
        super(cor, marca, ano);
        this.motor = motor;
        this.portas = portas;
        this.arcondicionado = arcondicionado;
    };
    
    ligarArCondicionado() {
        if (this.arcondicionado) {
            return "Ar-condicionado já está ligado!";
        }else{
            return "Carro não tem ar-condicionado.  ";
        }
    }
   
}

let carroLuxo1 = new carroLuxo("V8", 4, true, "Preto", "Mercedes", 2022);
let carroLuxo2 = new carroLuxo("V6", 2, false, "Branco", "Porsche", 2021);

console.log(carroLuxo1.ligarArCondicionado());
console.log(carroLuxo2.ligarArCondicionado());









