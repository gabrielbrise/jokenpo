const MOVES = ['pedra', 'papel', 'tesoura']
const PEDRA = 'pedra'
const PAPEL = 'papel'
const TESOURA = 'tesoura'


const MOVES_WINS = {
    [PEDRA]: TESOURA,
    [PAPEL]: PEDRA,
    [TESOURA]: PAPEL
}

const RESULTS = ['EMPATE', 'PONTO PARA VOCÊ', 'PONTO PARA O COMPUTADOR']

const checkPlayerMoveAgainstComputer = (playerMove, computerMove) => {
    if(isPlayerWin(playerMove, computerMove)) return 1
    if(isComputerWin(playerMove, computerMove)) return 2
    return 0
}

const isPlayerWin = (playerMove, computerMove) => MOVES_WINS[MOVES[playerMove - 1]] === MOVES[computerMove - 1]
const isComputerWin = (playerMove, computerMove) => MOVES_WINS[MOVES[computerMove - 1]] === MOVES[playerMove - 1]

module.exports = {
    MOVES,
    RESULTS,
    checkPlayerMoveAgainstComputer
}