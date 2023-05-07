export {players, playerTurn, boardSquares, txtDarkmode}
export {lastWinner, p1Color, p2Color}

import { registerPlayers } from "./Modules/register-players.js"
import { startGame } from "./Modules/start-game.js"
import { changeTurn } from "./Modules/change-turn.js"

const registerBtn = document.getElementById('register-btn')
const playBtn = document.getElementById('play-btn')


let players = []
let playerTurn = document.getElementById('player-turn')
let boardSquares = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let lastWinner = document.getElementById('last-winner')
let p1Color = '#EB1D36'
let p2Color = '#3AB4F2'
let txtDarkmode = '#F6F1F1'


//REGISTRO DE JOGADORES
registerBtn.addEventListener('click', registerPlayers)
//INÍCIO DE JOGO
playBtn.addEventListener('click', startGame)
//TROCA DE TURNO E MARCAÇÃO
changeTurn()