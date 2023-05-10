//criando objetos
const usuario1 = {
    usuarioEmail: "jau@email.com",
    usuarioSenha: "12345",
    usuarioGenero: "m",
    gravarDados: true
}

const usuario2 = {
    usuarioEmail: "bk@email.com",
    usuarioSenha: "12345",
    usuarioGenero: "m",
    gravarDados: true
}

//criar uma lista de objetos

let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);
console.log(listaDeUsuarios)

addEventListener("click", (evt)=>{
    //console.log(evento);
    if (evt.target.id == "btnSubmit"){
        //console.log(evt.target)
        //.target mostra a ação do click do mouse

        const inputEmail = document.querySelector("#idEmail");
        //console.log(inputEmail.value);
        const inputPass = document.querySelector("#idPass");

        try {
            listaDeUsuarios.forEach((usuario)=>{
                if(inputEmail.value == usuario.usuarioEmail && inputPass.value == usuario.usuarioSenha){
                    throw "Validado";
                }

            });

        throw "Não validado";

        }

        catch (msg) {
            const msgStatus = document.querySelector("#msgStatus");
            if (msg =="Validado"){
                msgStatus.setAttribute("style", "color:#00ff00;");
                msgStatus.innerHTML = "<span><strong></strong>Login efetuado com sucesso!</strong></span>"
            }else{
                msgStatus.setAttribute("style", "color: #ff0000;");
                msgStatus.innerHTML = "<span><strong>Usuario ou senha incorreta!</strong></span>"
            }

            console.log();

        }
      
       
    }
});

