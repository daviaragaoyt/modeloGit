alert("Obrigado por acessar!");

const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("email");
const senhaInput = document.querySelector("senha");

function submitFormulario(event) {

    // Verifica se o nome esta vazio
    if (event.srcElement[0].value === "") {
        event.preventDefault();
        alert("Por favor, preecha seu nome");
        return;
    }

    //verifica a data 
    if (event.srcElement[1].value === "") {
        event.preventDefault();
        alert("Por favor, preencha sua data de nascimento");
        return;
    }

    //Verifica se o email esta preenchido
    if (event.srcElement[2].value === "") {
        event.preventDefault();
        alert("Por favor, preencha com seu email");
        return;
    }

    //Verificar se a está preenchida
    if (validaPassword(event.srcElement[3].value, 8)) {
        event.preventDefault();
        alert("A senha precisa de 8 digitos minimos ");
        return;
    }
}


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

const meuForm = document.getElementById("meuForm");
const enviarFormulario = document.getElementById("enviarFormulario");
const sabre = document.getElementById("sabre");

meuForm.addEventListener("input", () => {
  if (verificarFormularioPreenchido(meuForm)) {
    sabre.classList.add("active"); // Ativar o brilho do sabre
    enviarFormulario.disabled = false; // Habilitar o botão de envio
  } else {
    sabre.classList.remove("active"); // Desativar o brilho do sabre
    enviarFormulario.disabled = true; // Desabilitar o botão de envio
  }
});

function verificarFormularioPreenchido(form) {
  const inputs = form.querySelectorAll("input");
  for (const input of inputs) {
    if (!input.value.trim()) {
      return false; // Se um campo não estiver preenchido, retorna false
    }
  }
  return true; // Todos os campos estão preenchidos, retorna true
}