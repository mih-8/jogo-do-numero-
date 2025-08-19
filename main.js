let numeroAleatorio = math.floor(math.random() *100) + 1;
const palpites = document.querySelector('.palpites');
const ultimoResultado = document.querySelector('.ultimoResultado');
const baixoOuAlto = document.querySelector('.baixoOuAlto');
const envioPalpite = document.querySelector('.envioPalpites');
const campoPalpite = document.querySelector('campoPalpite');
let contagemPalpites = 1;
let botaoReiniciar;

function verificarPalpite() {
  const palpiteUsuario = Number(campoPalpite.value);
  if (contagemPalpites === 1) {
    palpites.textContent = "palpites anteriores:";
  } 

 
