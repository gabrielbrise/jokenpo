const { checkPlayerMoveAgainstComputer } = require('./utils/jokenpo')
const { randomIntFromInterval } = require('./utils/number')
const { isInputValidRoundCount, isInputValidMoveOption } = require('./utils/prompt')
const { MOVES, RESULTS } = require('./utils/jokenpo')

const prompt = require('prompt-sync')({sigint: true})

let roundCount
let playerMove
let computerMove

let playerWins = 0
let computerWins = 0
let drawCount = 0

while(!roundCount) {
    const input = prompt('Quantas rodadas de jokenpo você quer jogar? ')
    
    if(isInputValidRoundCount(input)) {
        roundCount = parseInt(input)
    }
}

for(let i = 1; i <= roundCount; i++) {
    console.log(`\nRodada número ${i}`)
    while(!playerMove) {
        console.log('Escolha a sua jogada:\n1- Pedra\n2- Papel\n3- Tesoura\n')
        const input = prompt('')
    
        if(isInputValidMoveOption(input)) {
            playerMove = parseInt(input)
        }
    }

    computerMove = randomIntFromInterval(1, 3)

    const result = checkPlayerMoveAgainstComputer(playerMove, computerMove)

    if(result === 0) {
        drawCount++
    }

    if(result === 1) {
        playerWins++
    }

    if(result === 2) {
        computerWins++
    }


    console.log(`\nVocê jogou ${MOVES[playerMove - 1]} e o computador escolheu ${MOVES[computerMove - 1]}`)
    console.log(`Resultado da rodada: ${RESULTS[result]}`)
    console.log(`Score:\n- Você: ${playerWins}\n- Computador: ${computerWins}\n- Empates: ${drawCount}`)

    playerMove = undefined
}

if(playerWins > computerWins) {
    console.log(`Você ganhou do computador de ${playerWins} a ${computerWins}`)
}

if(playerWins < computerWins) {
    console.log(`Você perdeu do computador de ${computerWins} a ${playerWins}`)
}

if(playerWins === computerWins) {
    console.log(`Vocês empataram com ${playerWins} cada`)
}
