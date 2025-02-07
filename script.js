// Mapeamento das variaveis 
const result = document.querySelector(".result")
const humanScore = document.querySelector("#human-score") 
const machineScore = document.querySelector("#machine-score")

// criando a funcionalidade
let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanchoice) => {
    // console.log(humanchoice) => Click do humano
    // console.log(playmachine()) => Escolha da máquina
    PlayTheGame(humanchoice, playmachine())
    
} 


const playmachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random()*3)


    // console.log(randomNumber) => Ver o retorno do numero aleatorio

    return choices[randomNumber]
}



const PlayTheGame = (human, machine) => {

    // console.log(`Humano: ${human} | Maquina: ${machine}`)

    if(human === machine){
        result.innerHTML = "Deu Empate"

    } else if ( (human === 'paper' && machine === 'rock') || 
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')){
        
            humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você Ganhou!"
    } else {

        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
         result.innerHTML = "Você perdeu para Alexa!"
    }

}

