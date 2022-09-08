let numeroSecreto = Math.floor(Math.random() *11)
let tentativa = 0   


function Chutar(){
    let chute = parseInt(document.getElementById('valor').value)        
    if(tentativa <= 5){
        if(chute >10 || chute < 0 ){    
            window.alert('Você não colocou um número entre 0 ou 10!')
        }else{
        if (chute == numeroSecreto){
            window.alert(`Você acertou! O número é o ${numeroSecreto}`)
        } else {
            window.alert('Que pena você errou :(')
            tentativa++
            if(chute < numeroSecreto){
                window.alert('Tente talvez um número mais alto')
            } else if (chute > numeroSecreto){
                window.alert('Tente talvez um número mais baixo')
            }
          }
     }
    }else{

        window.alert('acabou')


    }
}