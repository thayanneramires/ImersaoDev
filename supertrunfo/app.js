var cartaDr = {
    nome: "Doutor Estranho",
    imagem: "https://i.pinimg.com/736x/06/a7/da/06a7da9e350037d87554740bbace15d6.jpg",
    atributos: {
        ataque: 85,
        defesa: 70,
        magia: 95
    }
}

var cartaHFerro = {
    nome: "Homem de Ferro",
    imagem: "https://terrafm94.com.br/wp-content/uploads/2018/05/Robert-Downey-Jr-homem-de-ferro.jpg",
    atributos: {
        ataque: 80,
        defesa: 80,
        magia: 0
    }
}

var cartaWanda = {
    nome: "Feitceira Escarlate",
    imagem: "https://www.cinematographe.it/wp-content/uploads/2021/03/WandaVision-cinematographe.it-9.jpg",
    atributos: {
        ataque: 90,
        defesa: 75,
        magia: 100
    }
}

var cartaThor = {
  nome: "Thor",
  imagem: "https://exame.com/wp-content/uploads/2016/09/size_960_16_9_thor5.jpg",
  atributos: {
    ataque: 88,
    defesa: 68,
    magia: 80
  }
}

var cartaLoki = {
  nome: "Loki",
  imagem: "https://i.pinimg.com/originals/a7/3b/c0/a73bc0c81ca8aa9174a8770832613083.png",
  atributos: {
    ataque: 70,
    defesa: 60,
    magia: 83
  }
}

var cartaHulk = {
    nome: "Hulk",
    imagem: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/05/Marvel-Hulk.jpeg",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 0
    }
}

var cartaVNegra = {
    nome: "Viúva Negra",
    imagem: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/11/scarlett-johansson-black-widow-4k-new-0s-1600x1200-1.jpg",
    atributos: {
        ataque: 73,
        defesa: 57,
        magia: 0
    }
}

var cartaCMarvel = {
    nome: "Capitã Marvel",
    imagem: "https://cinepop.com.br/wp-content/uploads/2018/09/capitamarvel21.jpg",
    atributos: {
        ataque: 95,
        defesa: 80,
        magia: 70
    }
}

var cartaHFormiga = {
  nome: "Homem Formiga",
  imagem: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2016/04/homemformiga.jpg",
  atributos: {
    ataque: 80,
    defesa: 70,
    magia: 0
  }
}

var cartaCAmerica = {
  nome: "Capitão America", 
  imagem: "https://i.pinimg.com/originals/ed/51/29/ed512938b41aff93209ee340d662a393.jpg",
  atributos: {
    ataque: 85,
    defesa: 82,
    magia: 0
  }
}

var cartaAranha = {
  nome: "Homem Aranha",
  imagem: "https://escutai.com/wp-content/uploads/2019/05/Homem-Aranha.jpg",
  atributos: {
    ataque: 75,
    defesa: 56,
    magia: 0
  }
}

var cartaPNegra = {
  nome: "Pantera Negra", 
  imagem: "https://blogmedia.waufen.com.br/wp-content/uploads/2018/06/pantera-negra-colar-filme.jpg",
  atributos: {
    ataque: 88,
    defesa: 86,
    magia: 0
  }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaDr, cartaHFerro, cartaWanda, cartaThor, cartaLoki, cartaHulk, cartaVNegra, cartaCMarvel, cartaHFormiga, cartaCAmerica, cartaAranha, cartaPNegra]

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas() {
  var divQuantidadeCartas = document.getElementById('quantidade-cartas')
  var html = "Quantidade de cartas no jogo: " + cartas.length
  divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar() {
  var divPlacar = document.getElementById('placar')
  var html = "Jogador " + pontosJogador +  "/" + pontosMaquina + " Máquina"
  
  divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
    
    if (cartas.length == 0) {
      alert("Fim de jogo")
      if (pontosJogador > pontosMaquina) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
      } else if ( pontosJogador < pontosMaquina) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
      } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
      }
    } else {
      document.getElementById('btnProximaRodada').disabled = false
    }

    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true
    
  
    exibeCartaMaquina()
    atualizaPlacar()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
  var divCartas = document.getElementById('cartas')
  
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true
  
  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ""
  
}