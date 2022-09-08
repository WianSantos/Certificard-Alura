let valor = document.getElementById('valor')
let anosLuz = 9500000000000 
let resultadoHtml = document.getElementById('valorConvertido')
let resultado = 0

function Converter(){
    let valorReal = valor.value
    let valorNumerico = parseFloat(valorReal)


    resultado = valorNumerico / anosLuz
    resultadoFixo = resultado.toFixed(3)
    resultadoHtml.innerHTML = ''
    resultadoHtml.innerHTML += `Você demoraria ${resultadoFixo} anos luz para chegar nessa distância `
}