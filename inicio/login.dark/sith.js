

/*alert("Obrigado por Acessar!");*/

const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("email");
const senhaInput = document.querySelector("senha");

function submitFormulario(event) {

    // Verifica se o nome esta vazio
    if (event.srcElement[0].value === "") {
        alert("Por favor, preecha seu nome");
        return;
    }

    //verifica a data 
    if (event.srcElement[1].value === "") {
        alert("Por favor, preencha sua data de nascimento");
        return;
    }

    //Verifica se o email esta preenchido
    if (event.srcElement[2].value === "") {
        alert("Por favor, preencha com seu email");
        return;
    }

    //Verificar se a está preenchida
    if (validaPassword(event.srcElement[3].value, 8)) {
        alert("A senha precisa de 8 digitos minimos ");
      return;
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log('galinha', event)

    //Verifica se o nome esta vazio
    if (nameInput.value === "" || nameInput.value === null) {
        alert("Por favor, preecha seu nome");
        return;
    }

    //Verifica se o email esta preenchido
    if (emailInput.value === "" || isEmailValid(emailInput.value)) {
        alert("Por favor, preencha com seu email");
        return;
    }
    //Verificar se a está preenchida
    if (!validaPassword(senhaInput.value, 8)) {
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

function validaPassword(senha, minDigits) {

    if (senha.length >= minDigits) {
        return false
    }
    //Senhas invalidas
    return true
}

