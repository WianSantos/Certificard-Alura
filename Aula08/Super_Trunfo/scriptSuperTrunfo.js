let carta1 = {
    nome: "Bulbassaur",
    imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    atributos: {
        Ataque: 5,
        Defesa: 7,
        Magia: 4
    }
}

let carta2 = {
    nome: "Charmander",
    imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    atributos: {
        Ataque: 7,
        Defesa: 5,
        Magia: 6
    }
}
let carta3 = {
    nome: "Squirtle",
    imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    atributos: {
        Ataque: 5,
        Defesa: 6,
        Magia: 8
    }
}

let cartas = [carta1, carta2, carta3]
let cartaMaquina
let cartaJogador

function sortearCarta() {
    let numeroCartaMaquina = Math.floor(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]

    let numeroCartaJogador = Math.floor(Math.random() * 3)
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = Math.floor(Math.random() * 3)}

    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)

    document.getElementById('btnSortear').disabled=true
    document.getElementById('btnJogar').disabled=false
    exibirCartaJogador()
}
function obtemAtributoSelecionado(){
    let radioAtributos = document.getElementsByName('atributo')
    
    for (var i = 0; i< radioAtributos.length; i++){
        if (radioAtributos[i].checked ==true){
            return radioAtributos[i].value 
        }
    }
}
function jogar(){
    let atributoSelecionado = obtemAtributoSelecionado()
    let valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

    let divResultado = document.getElementById('resultado')
    //console.log(valorCartaJogador)
    //console.log(atributoSelecionado)
    if (valorCartaJogador > valorCartaMaquina){
        htmlResultado = "<p class='resultado-final'>Venceu</p>"
    } else if (valorCartaJogador > valorCartaMaquina){
        htmlResultado = "<p class='resultado-final'>Perdeu!</p>"
    } else{
        htmlResultado = "<p class='resultado-final'>Empatou</p>"
    }
    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled=true
    exibirCartaMaquina()
}
function exibirCartaJogador(){
    let divCartaJogador = document.getElementById('carta-jogador')
    divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
    var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    let tagHTML = "<div id='opcoes' class='carta-status'>"
    
    let opcoesTexto =''
    for (let atributo in cartaJogador.atributos){
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>" ;
    }
    let nome = `<p class='carta-subtitle'>${cartaJogador.nome}</p>`

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"

}
function exibirCartaMaquina(){
    let divCartaMaquina = document.getElementById('carta-maquina')
    divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
    var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    let tagHTML = "<div id='opcoes' class='carta-status'>" 
    let opcoesTexto =''
    for (let atributo in cartaMaquina.atributos){
    opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] +"</p>" ;
    }
    let nome = `<p class='carta-subtitle'>${cartaMaquina.nome}</p>`

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"

}