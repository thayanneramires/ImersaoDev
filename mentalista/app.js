var numeroSecreto = parseInt(Math.random() * 11)
var inputUsuario = document.getElementById("input-numero")
var botaoChute = document.getElementById("botao-confirmar")
var tenteNovamente = document.getElementById("tentativa-novamente")
var botaoReset = document.getElementById("reset")
var tentativas = 4

function verificar(){
  tentativas = tentativas - 1
   if (tentativas < 1) {
        tenteNovamente.innerHTML = "Suas tentativas acabaram! O número secreto é: " + numeroSecreto
        return
    }
  var chute = inputUsuario.value
    if (chute == numeroSecreto) {
        tenteNovamente.innerHTML = "Acertou!"

    } else if (chute > numeroSecreto) {
        tenteNovamente.innerHTML = " O número secreto é menor!"
    } else {
        tenteNovamente.innerHTML = "O número secreto é maior!"
    }
    inputUsuario.value = ""
}

function resetar() {
    tentativas = 4
    numeroSecreto = parseInt(Math.random() * 10) + 1
    tenteNovamente.innerHTML = ""

}
inputUsuario.addEventListener("keyup", function (event) {
    if (event.key == 'Enter') {
        verificar()
    }
})

botaoChute.onclick = verificar
botaoReset.onclick = resetar
