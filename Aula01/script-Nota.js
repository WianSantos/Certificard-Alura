var nome = document.getElementById('nome')

let nota1 = document.getElementById('nota1')
let nota2 = document.getElementById('nota2')
let nota3 = document.getElementById('nota3')
let nota4 = document.getElementById('nota4')
let res = document.getElementById('notaFinal')


function calcular(){

    let nota10 = Number(nota1.value) 
    let nota20 = Number(nota2.value) 
    let nota30 = Number(nota3.value) 
    let nota40 = Number(nota4.value) 
    let nomeS = nome.value

    let notaFinal = (nota10+nota20+nota30+nota40)/4
    
    let notaFinal1 =  notaFinal.toFixed(1)

    if (notaFinal1 >= 7 && notaFinal1 <= 9.9){
        resposta = 'Aprovado!'
    }else if(notaFinal1 <=6) {
        resposta = 'Reprovado!'
    } else if (notaFinal1 == 10){
        resposta = 'Parabens você tirou a maior nota possivel!'
    }
    res.innerHTML=''
    res.innerHTML+=`<p>${notaFinal1}</p>`
    res.innerHTML+=`<p>${resposta}</p>`
    res.innerHTML+=`A nota do aluno ${nomeS} foi de ${notaFinal1}`

    console.log(`A nota do aluno ${nomeS} foi de ${notaFinal1}`)
}



