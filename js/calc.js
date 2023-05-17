

//CRIANDO UMA FUNÇÃO PARA RECEBER O BOTÃO
function insereNumero(botao,visor) {
    if (botao.value =="+" || botao.value == "-" || botao.value == "*" || botao.value == "/"){
        console.log(visor.value.length)
        visor.value += botao.value
        if(visor.value[visor.value.length-1] == "+" || visor.value[visor.value.length-1] == "-" || 
        visor.value[visor.value.length-1] == "*" || visor.value[visor.value.length-1] == "/"){
            visor.value.slice(visor.value.length-1)
        }
    }else{
        visor.value += botao.value
    }

}

// function resultado(visor) {

//     let novoVisor = visor.value.split("+");

//     let resultadoOperacao = 0;

//     novoVisor.forEach((nr)=> {
//         resultadoOperacao += parseInt(nr);
//     });
//     console.log(resultadoOperacao);

// }
//
//function resultado(visor) {

//    let soma = visor.value.split("+");
//    console.log(soma);
//    let subtracao = visor.value.split("-");
 //   console.log(subtracao);

//}

function resultado(visor) {
    visor.value = eval (visor.value);
}