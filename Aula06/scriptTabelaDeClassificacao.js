let wian ={
    nome:"wian",
    vitorias: 0,
    empates:0,
    derrotas:0,
    pontos:0
}
let rafa ={
    nome:"rafa",
    vitorias: 0,
    empates:0,
    derrotas:0,
    pontos:0
}
let paulo ={
    nome:"paulo",
    vitorias: 0,
    empates:0,
    derrotas:0,
    pontos:0
}

wian.pontos = calcularPontos(wian)
rafa.pontos = calcularPontos(rafa)
paulo.pontos = calcularPontos(paulo)

function calcularPontos(jogador){
    let pontos = (jogador.vitorias*3) + jogador.empates
    return(pontos)
}


let jogadores = [wian, rafa, paulo]


function exibeJogadoresNaTela() {
    let elemento =""

    for(let i = 0; i <jogadores.length; i++){
        elemento += "<tr><td>"+ jogadores[i].nome +"</td>"
        elemento +="<td>"+ jogadores[i].vitorias +"</td>"
        elemento +="<td>"+jogadores[i].empates+"</td>"
        elemento +="<td>"+jogadores[i].derrotas+"</td>"
        elemento +="<td>"+ jogadores[i].pontos+"</td>"
        elemento +="<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
        elemento +="<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
        elemento +="<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
        elemento += "</tr>"
    }
    let tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = elemento
}

exibeJogadoresNaTela(jogadores)

function adicionarVitoria(i){
    let jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calcularPontos(jogador)
    exibeJogadoresNaTela()
}

function adicionarEmpate(i){
    let jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calcularPontos(jogador)
    exibeJogadoresNaTela()
}
function adicionarDerrota(i){
    let jogador = jogadores[i]
    jogador.derrotas++
    jogador.pontos = calcularPontos(jogador)
    exibeJogadoresNaTela()
}