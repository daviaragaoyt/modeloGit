console.log("Ola, Seja Bem Vind0.");
console.log("Este é o meu primeiro site teste e foi feito para uma amiga");
console.log("Aqui voce encontra sua foto com seus meios de contato");

const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput= document.querySelector("email");
const senhaInput=document.querySelector("senha");

form.addEventListener("submit", (event)=>{
    event.preventDefault();

//Verifica se o nome esta vazio
if(nameInput.value===""||isEmailValid(emailInput.value)){
    alert("Por favor, preecha seu nome");
    return;
}

//Verifica se o email esta preenchido
if(emailInput.value===""){
    alert("Por favor, preencha com seu email");
    return;
}

//Se tudo estiver devidamente preenchido, envie o formulario
form.submit();
});

function isEmailValid(email){
//cria um regex para validar email
const emailRegex=new RegExp(
    //usuario@gmail.com
    /^[a-zA-Z0-9,_-]+@[a-zA-Z0-9,_-]+\.[a-zA-Z]{2,}$/
);

if(emailRegex.teste(email)){
    return true;
}

return false;
}

