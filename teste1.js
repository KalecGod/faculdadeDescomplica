function exemploOperacaoAssincrono(){
    return new Promise((resolve,reject) => {

        setTimeout(()=> {
            const sucesso = true

if(sucesso){
    resolve("Operação bem-sucedida!");
}else{
    reject("Operaçao Falhou!");
}

  },2000)
    });
}

<<<<<<< HEAD

exemploOperacaoAssincrono().then((resultado)=> {console.log(resultado)}
).catch ((erro)=>{console.log(erro)});


=======
exemploOperacaoAssincrono()
.then((resultado)=>{console.log(resultado)})
.catch((erro)=>{console.log(erro)})
>>>>>>> c4316b8496faa394748d77f1ec0355d39112aa2f
