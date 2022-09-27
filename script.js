var numeroSecreto = parseInt(Math.random() * 11);
var tentativa = 0;

function Chutar() {
    var elementoResultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);
    console.log(chute)

    if (chute === numeroSecreto) {
        elementoResultado.innerHTML = "Você acertou"
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Digite um número de 0 a 10"
    } else if (chute > numeroSecreto) {
        elementoResultado.innerHTML = "Tente um numero menor"
    } else if (chute < numeroSecreto) {
        elementoResultado.innerHTML = "Tente um numero maior"
    }
    tentativa ++

    if (tentativa === 3) {
        alert("Você não tem mais tentativas! O numero era " + numeroSecreto + ". Atualize a página para adivinhar novamente.")
    }
}



