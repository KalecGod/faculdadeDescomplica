
let minhaPromessa = new Promise((resolve,reject)=>{

    let sucesso = true;

    if(sucesso){
        resolve("Sucesso")
    }else{

        reject("ERRO!")
    }
});


minhaPromessa.then(result =>{

    console.log(result);
}).catch(error =>{
    console.log(error);
}).finally(()=>{
    console.log("Operação Concluída")
});






