var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    resultado.innerHTML = "Você acertou, parabéns!!";
  } else if (chute > 10 || chute < 0) {
    resultado.innerHTML = "Digite um número entre 0 e 10";
  } else if (chute == 3 && chute < numeroSecreto) {
    resultado.innerHTML = "Digite um valor mais alto";
  } else if (chute == 7 && chute > numeroSecreto) {
    resultado.innerHTML = "Digite um valor mais baixo";
  } else {
    resultado.innerHTML = "Você errou";
  }
}
