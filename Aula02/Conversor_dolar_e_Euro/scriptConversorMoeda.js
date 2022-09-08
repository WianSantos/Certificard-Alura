var valorElemento = document.getElementById('valor')
let valorDollar= 5.06
let valorEuro= 5.52
let resultado = 0 
let valorhtml = document.getElementById('valorConvertido')
function ConverterDolar(){
    
    var valor = valorElemento.value
    var valorNumerico = parseFloat(valor)

    resultado = valorNumerico * valorDollar
    valorhtml.innerHTML =''
    valorhtml.innerHTML +=`R$ ${resultado}`
}
function ConverterEuro(){
    
    var valor = valorElemento.value
    var valorNumerico = parseFloat(valor)

    resultado = valorNumerico * valorEuro
    valorhtml.innerHTML =''
    valorhtml.innerHTML +=`R$ ${resultado}`
}