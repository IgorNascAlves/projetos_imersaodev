function Adicionar() {
  chave = document.getElementById("URL").value;
  valor = document.getElementById("Img").value;
  urls[chave] = valor;

  carregaTelas();
}

function carregaTelas() {
  paragrafo = document.getElementById("lista");
  codigo_html = "";
  for (var URL in urls) {
    codigo_html =
      codigo_html +
      "<a href=" +
      URL +
      " target=_blank><img src=" +
      urls[URL] +
      "></a>";
  }
  paragrafo.innerHTML = codigo_html;
}

var urls = {
  "https://igornascalves.github.io/projetos_imersaodev/primeiro-pagina/dist/":
    "https://shots.codepen.io/igornascalves/pen/vYWMmWd-512.webp?version=-1",
  "https://igornascalves.github.io/projetos_imersaodev/calculadora-de-m-dia/dist/":
    "https://shots.codepen.io/igornascalves/pen/jOaRKvg-512.webp?version=-1",
  "https://igornascalves.github.io/projetos_imersaodev/conversor-de-moedasid3/dist/":
    "https://shots.codepen.io/igornascalves/pen/abVreOK-512.webp?version=-1",
  "https://igornascalves.github.io/projetos_imersaodev/mentalistaid3/dist/":
    "https://shots.codepen.io/igornascalves/pen/zYpxVeV-512.webp?version=-1"
};

carregaTelas();
// Desafios desta aula!

//     Escolher o seu tema preferido para adaptar ao nosso código, ou seja, ao invés de filmes pode ser uma lista de animes, HQ's, cursos, capas de jogos... OK
//     Tentar implementar outras versões da estrutura de repetição que fizemos com for, como por exemplo com foreach ou while OK
//     Criar uma condição para não adicionar filmes repetidos, caso eles já tenham sido adicionados anteriormente
//     Criar um campo e botão para adicionar a imagem pela tela, e não direto no código OK

// https://shots.codepen.io/igornascalves/pen/qBpOYyZ-512.webp?version=-1
// AluraFlix v1- ID3