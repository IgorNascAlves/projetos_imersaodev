function Clear(){
  document.getElementById("valorReal").value = "";
  document.getElementById("valorDolar").value = "";
  document.getElementById("valorIene").value = "";
}

function Converter(moeda) {
  var valorReal = document.getElementById("valorReal");
  var valorDolar = document.getElementById("valorDolar");
  var valorIene = document.getElementById("valorIene");
  // var outputValorConvertido = document.getElementById("valorConvertido");

  if (moeda == "Real") {
    inputValor = parseFloat(valorReal.value);
    valorDolar.value = inputValor * 5;
    valorIene.value = inputValor * 22.89;
  } else if (moeda == "Dolar") {
    inputValor = parseFloat(valorDolar.value);
    valorReal.value = inputValor * 5;
    valorIene.value = inputValor * 115.81;
  } else if (moeda == "Iene") {
    inputValor = parseFloat(valorIene.value);
    valorReal.value = inputValor / 22.89;
    valorDolar.value = inputValor / 115.75;
  }
  
  // if (inputValor.value != "") {
  //   var valorReal = parseFloat(inputValor.value);
  //   var valorDolar = valorReal / 5;
  //   var textoSaida = "Valor em Dolar " + valorDolar;
  // } else {
  //   var textoSaida = "Campo Vazio";
  // }

  // outputValorConvertido.innerHTML = moeda;
}

// Desafios desta aula!

//     Adicionar outras moedas para converter.
// OK
//     Conversor de quilômetros para anos luz e verificar o tempo que demora para ir de uma estrela para outra.

//     Conversor de temperaturas entre farenheit, kelvin e celcius.

//     Adicionar uma linha ao projeto desenvolvido para que apareça o valor em bitcoin.