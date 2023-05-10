// Exercício 1
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function(){
    document.body.style.backgroundColor = "purple";
});


const form1 = document.getElementById("form1");
const lista = document.getElementById("lista");
form1.addEventListener("submit", function(event){
    event.preventDefault();
    const texto = document.getElementById("texto").value;
    const newItem = document.createElement("li");
    newItem.textContent = texto;
    lista.appendChild(newItem);
    form1.reset();
});

// Exercício 3
const btn2 = document.getElementById("btn2");
const imagem = document.getElementById("imagem");
btn2.addEventListener("click", function(){
    const currentSrc = imagem.getAttribute("src");
    const newSrc = currentSrc === "./img/gato-serio.jpg" ? "./img/gato-chocado.jpg" : "./img/gato-serio.jpg";
    imagem.setAttribute("src", newSrc);
});

// Exercício 4
const btn3 = document.getElementById("btn3");
const msg = document.getElementById("msg");
btn3.addEventListener("click", function(){
    msg.textContent = "Deu certo";
});

// Exercício 5
const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", function(){
    btn4.style.display = "none";
});

const btn5 = document.getElementById("btn5");
btn5.addEventListener("click", function(){
    btn4.style.display = "";
});