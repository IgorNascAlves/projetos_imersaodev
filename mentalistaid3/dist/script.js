function getRandomArbitraryInt(min, max) {
  x = Math.random() * (max - min) + min;
  return Math.round(x);
}

function Reset() {
  tentativas = 0;
  num_sorteudo = getRandomArbitraryInt((min = 0), (max = 10));
}

function Chutar() {
  campo_chute = document.getElementById("valor");
  chute = campo_chute.value;
  saida = document.getElementById("resultado");
  texto_saida = "";

  if (chute == num_sorteudo) {
    texto_saida = "Você acertou com " + tentativas + " tentativas";
    texto_saida =
      texto_saida + "<br> Jogue novamente, sorteamos um novo numero";
    Reset();
  } else if (chute > num_sorteudo) {
    texto_saida = "O numero " + chute + " é maior que o sorteado";
  } else if (chute < num_sorteudo) {
    texto_saida = "O numero " + chute + " é menor que o sorteado";
  }

  tentativas = tentativas + 1;
  saida.innerHTML = texto_saida;
  campo_chute.value = "";
}

tentativas = 0;
num_sorteudo = getRandomArbitraryInt((min = 0), (max = 10));

// Desafios desta aula!

//     Adicionar um número de tentativas para a pessoa tentar acertar e imprimir a resposta no final. OK
//     Quando a pessoa errar, deixar na mensagem se o número chutado é maior ou menor que o número secreto. OK
//     Pesquisar e aprender a diferença entre == compara apenas valor e === compara valor e tipo OK