
//Exemple de user var,let e const

const externo = "Olá mundo , Constante Externo Global";

// Declaração de uma variavel usando var

function  exemploVar(){

    if(true){
        var mensagem1 = 
        "Olá, Faculdade Descomplica , Sou um var  e posso ser acessado fora do bloco";
    }
console.log(mensagem1)

}

// Chamando a função exmplovar

exemploVar() ;

// Exemplo de erro e correção

var mensagem = "Olá, Faculdade Descomplica ! , var Externo  e pode ser acessado fora do bloco   ";
console.log(mensagem);

// Declarção de uma variável usando let

function exemploLet() {

   if(true) {
        let mensagem = "Olá, Faculdade Descomplica, Sou um let e só posso ser acessado dentro deste bloco";
        // Isso funciona, pois mensagem está definida dentro do bloco
        console.log(mensagem); 
    }
    
    //console.log(mensagem); // Isso causaria um erro, pois mensagem não está definida aqui
}
// Chamando a função exemplolet
exemploLet();

// Exemplo de erro e correção

let mensagem1 = "Olá, Faculdade Descomplica! , let Externo  e pode ser acessado fora do bloco";
console.log(mensagem1);  

//Declaração de uma constante Usando Const

function exemploConstante() {
    const mensagem = "Olá, Faculdade Descomplica, Sou um const e só posso ser acessado dentro deste bloco";
    console.log(mensagem);
}
// Chamando a função exemploConst
exemploConstante();
// Exemplo externo de const
console.log(externo); // Acessando a constante global

// Exemplo externo tentar alterar constante global  

function exemploConstanteExterna() {
    const interno = "Nova Mensagem"; // Isso não causará erro, pois estamos criando uma nova constante local    
}
//externo = "Nova Mensagem"; // Isso causará um erro, pois externo é uma constante

// Demonstrando o escopo global de var

var mensagem2 = "teste é um exemplo de var global";
console.log("Exemplo de escopo global de var: ", mensagem2);

// Demonstrando o escopo de bloco de let    

let mensagemLet = "teste é um exemplo de let global";
console.log("Exemplo de escopo global de let: ", mensagemLet);

// Exemplo do escopo inacessivel 

console.log("Exemplo de escopo inacessivel: ", interno); // Isso causará um erro, pois mensagem não está definida aqui



