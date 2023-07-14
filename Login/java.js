console.log("Ola, Seja Bem Vind0.");
console.log("Este é o meu primeiro site teste e foi feito para uma amiga");
console.log("Aqui voce encontra sua foto com seus meios de contato");

const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("email");
const senhaInput = document.querySelector("senha");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Verifica se o nome esta vazio
    if (nameInput.value === "") {
        alert("Por favor, preecha seu nome");
        return;
    }

    //Verifica se o email esta preenchido
    if (emailInput.value === "" || isEmailValid(emailInput.value)) {
        alert("Por favor, preencha com seu email");
        return;
    }
    //Verificar se a está preenchida
    if (!validaPassoword(senhaInput.value, 8)) {
        alert("A senha precisa de 8 digitos minimos ");
        return;
    }


    //Se tudo estiver devidamente preenchido, envie o formulario
    form.submit();
});
//cria um regex para validar email
function isEmailValid(email) {

    const emailRegex = new RegExp(
        //usuario@gmail.com
        /^[a-zA-Z0-9,_-]+@[a-zA-Z0-9,_-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.teste(email)) {
        return true;
    }

    return false;
}

//Função que valida a senha

function validaPassoword(senha, minDigits) {

    if (senha.length >= minDigits) {
        return true
    }
    //Senhas invalidas
    return false
}

