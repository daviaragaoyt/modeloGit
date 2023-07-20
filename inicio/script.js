//alert("Obrigado por Acessar!");

const form = document.querySelector("#form");
const selectInput = document.querySelector("#name");
const jediInput = document.querySelector("email");
const sithInput = document.querySelector("senha");

function alterarClass() {
  if (document.getElementById("opcoes").value == "jedi") {
    document.getElementById("bloco").className = "containerJedi";
    document.getElementById("botaoEnviar").className = "enviarJedi";

    document.getElementById('form').action = "./login.jedi/jedi.html"
  }

  if (document.getElementById("opcoes").value == "sith") {
    document.getElementById("bloco").className = "containerSith";
    document.getElementById("botaoEnviar").className = "enviarSith";

    document.getElementById('form').action = "./login.dark/sith.html"
  }
}

function redirecionar(opcoes) {
  var select = document.getElementById("opcoes");
  var opcaoSelecionada = select.value;

  if (opcaoSelecionada === "") {
    event.preventDefault();
    alert("Por favor, selecion e uma opção antes de prosseguir.");
  } else {
    // Redirecionar para a próxima página
    window.location.href = "google.com";
  }
}

