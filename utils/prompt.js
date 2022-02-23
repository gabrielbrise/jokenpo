const { MOVES } = require('./jokenpo')

const MAX_ROUND_COUNT = 10

const isInputValidNumber = (string) => parseInt(string) !== NaN
const isInputValidRoundCount = (rounds) => isInputValidNumber(rounds) && parseInt(rounds) <= MAX_ROUND_COUNT
const isInputValidMoveOption = (option) => isInputValidNumber(option) && parseInt(option) > 0 && parseInt(option) <= MOVES.length

module.exports = {
    isInputValidNumber,
    isInputValidRoundCount,
    isInputValidMoveOption
}