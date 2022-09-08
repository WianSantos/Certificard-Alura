
function adicionarFilme(){
    let filmeFavorito = document.getElementById('filme').value
    // uso do endsWith
    if (filmeFavorito.endsWith('.jpg') ){
        listarFilmesNaTela(filmeFavorito)
    }else{
        window.alert('Erro, não é um arquivo .JPG')
    }
    document.getElementById('filme').value=""
}   
function listarFilmesNaTela(filme){
    let elementoFilmeFavorito = "<img src=" + filme + ">"
    let elementoListaFilmes = document.getElementById('listaFilmes')
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito
}sc