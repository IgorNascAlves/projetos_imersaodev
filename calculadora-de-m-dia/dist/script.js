var estudante = "Igor do Nascimento"
var nota1 = 10
var nota2 = 4
var nota3 = 4
var nota4 = 0
var notaFinal = (nota1+nota2+nota3+nota4)/4
var textoFinal = "Bem vindo estudante " + estudante + "</br>" + "Sua nota final foi " + notaFinal.toFixed(1)
// console.log("Bem vindo estudante " + estudante)
// console.log("Sua nota final foi " + notaFinal.toFixed(1))

// Desafios desta aula!

//     Dependendo da nota, mostrar se a aluna ou aluno foi aprovada(o) ou não - OK
// if (notaFinal >= 5)
//   console.log("APROVADO")
// else
//   console.log("REPROVADO")
var resultado = "INVALIDO"
if (notaFinal >= 5)
  resultado = "APROVADO"
else
  resultado = "REPROVADO"
//     Alterar o fundo da tela da maneira que achar mais legal - OK
//     Imprimir na própria página o resultado, ao invés do console
p_resultado = document.getElementById('page-resultado')
p_resultado.innerHTML = textoFinal + "<br>" + resultado

//     Criar um conversor de temperaturas entre farenheit e celcius - OK
// F = C x 1,8 + 32
C = 30
F = C * 1.8 + 32
console.log('Celcius: ' + C + 'ºC')
console.log('Fahrenheit: ' + F + 'ºF')
//     Colocar a conta inteira da média em apenas uma linha - OK
// Variavel textoFinal é mais ou menos isso já