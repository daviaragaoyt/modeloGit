/*alert("Obrigado por Acessar!");*/

const form = document.querySelector("#form");
const selectInput = document.querySelector("#name");
const jediInput = document.querySelector("email");
const sithInput = document.querySelector("senha");

function redirecionar(opcoes) {
    var select = document.getElementById("opcoes");
    var opcaoSelecionada = select.value;
    
    if (opcaoSelecionada === "") {
      alert("Por favor, selecione uma opção antes de prosseguir.");
    } else {
      // Redirecionar para a próxima página
      window.location.href = "proxima_pagina.html";
    }
  }

