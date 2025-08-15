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