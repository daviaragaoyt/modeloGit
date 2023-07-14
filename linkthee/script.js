console.log("Ola, Seja Bem Vind0.");
console.log("Este é o meu primeiro site teste e foi feito para uma amiga");
console.log("Aqui voce encontra sua foto com seus meios de contato");

const chk = document.getElementById('chk')

const headerElement = document.getElementsByClassName('header');



chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})  



