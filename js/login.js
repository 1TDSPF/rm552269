//criando objetos
/*const usuario1 = {
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
}*/

//criar uma lista de objetos

let listaDeUsuarios = [
    {
    nomeCompleto: "Jaú da Silva",
    usuarioEmail: "jau@gmail.com",
    usuarioSenha: "12345"
    }
];

localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));


addEventListener("click", (evt)=>{
    //console.log(evento);
    const inputEmail = document.querySelector("#idEmail");
    //console.log(inputEmail.value);
    const inputPass = document.querySelector("#idPass");
    if (evt.target.id == "btnSubmit"){
        //console.log(evt.target)
        //.target mostra a ação do click do mouse

      

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

            

        }
      
       
    }else if(evt.target.className=="fa fa-eye" || evt.target.className=="fa fa-eye-slash") {
        if(inputPass.getAttribute("type") == "password"){
            inputPass.setAttribute("type", "text");
            evt.target.setAttribute("class", "fa fa-eye-slash");
        }else{
            inputPass.setAttribute("type", "password");
            evt.target.setAttribute("class", "fa fa-eye");
        }

    }
});

