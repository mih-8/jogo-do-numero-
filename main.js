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

 palpites.textContent += palpiteUsuario + " ";
  
 if (palpiteUsuario === numeroAleatorio) {
   ultimoResultado.textContent = "Parabéns! Você Acertou!";
   ultimoResultado.staly.backgroundColor = "green";
   baixoOuAlto.textContent = "";
   finalizarJogo();
 } else if (contagemPalpites ===10) {
   ultimoResultado.textContent = "FIM DE JOGO!!";
   baixoOuAlto.textContent = "";
   finalizarJogo();
 } else {
   ultimoResultado.textContent = "Errado";
   ultimoResultado.staly.backgroundColor = "red";
   if (palpiteUsuario < numeroAleatorio) {
     baixoOuAlto.textContent = "O último palpite foi muito baixo";
   } else if (palpiteUsuario > numeroAleatorio) {
     baixoOuAlto.textContent = "O Último palpite foi muito alto";
   }
 }

 contagemPalpites++;
 campoPalpite.value = "";
 campoPalpite.focus();
 }

  envioPalpite.addEventListener('click', verificarPalpite);

  function finalizarJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReiniciar = document.creatElement('button');
    document.body.appChild(botaoReiniciar);
    botaoReiniciar.textContent = 'Reiniciar Jogo';
    botaoReiniciar.classiList.add('botaoReiniciar');
    document.body.appChild(botaoReiniciar);
    botaoReiniciar.addEventListener('click', reiniciarJogo);
  }

  function reiniciarJogo() {
    contagemPalpites = 1;
    const paragrafosReiniciar = document.querySelectorAll('.paragrafosResultados p');
    for (const paragrafoReiniciar of paragrafosReiniciar) {
      paragrafoReiniciar.textcontent = "";
  }
  }
  

























  
   
