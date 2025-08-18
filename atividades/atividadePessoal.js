// Crianção de Banco (ContaPessoaFisica,ContaPessoaJuridica,Poupança).


class Pessoa extends Endereco{

    constructor(nomeCompleto,dataNascimento,idade,cpf,email,estado,cidade,cep,rua){
        super(estado,cidade,cep,rua)

        this.nomeCompleto = nomeCompleto;
        this.dataNascimento = dataNascimento;
        this.idade = idade;
        this.cpf = cpf;
        this.email = email

    }

    get getNomeCompleto(){
        return this.nomeCompleto;
    }

    set setNomeCompleto(nomeCompleto){
        this.nomeCompleto = nomeCompleto;
    }
    get getDataNascimento(){
        return this.dataNascimento;
    }
    set setDataNascimento(dataNascimento){
        this.dataNascimento = dataNascimento;
    }

    get getIdade(){
        return this.idade;
    }
    set setIdade(idade){
        this.idade = idade;
    }
   
    get getCpf(){
        return this.cpf;
    }

    set setCpf(cpf){

        if(validarCPF){
            this.cpf = cpf;
        }


    }


 
}


//Endereço: rua, cidade, estado, CEP (ou um objeto Endereço separado).

class Endereco {

    constructor(estado,cidade,cep,rua){

        this.estado = estado;
        this.cidade = cidade;
        this.cep = cep;
        this.rua = rua;

    }

    get getEstado(){
        return this.estado 
    }
    get getCidade(){
        return this.cidade;
    }
    get getCep(){
        return this.cep;
    }
    get getRua(){
        return this.rua;
    }
}



function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

    if (cpf.length !== 11) return false;

    // Elimina CPFs inválidos conhecidos
    if (/^(\d)\1+$/.test(cpf)) return false;

    // Valida 1º dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let digito1 = resto > 9 ? 0 : resto;
    if (digito1 !== parseInt(cpf.charAt(9))) return false;

    // Valida 2º dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let digito2 = resto > 9 ? 0 : resto;
    if (digito2 !== parseInt(cpf.charAt(10))) return false;

    return true;
}

// Exemplo de uso
console.log(validarCPF("123.456.789-19")); // false
console.log(validarCPF("529.982.247-25")); // true
