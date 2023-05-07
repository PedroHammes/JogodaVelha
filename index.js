export {players, playerTurn, round, boardSquares, txtDarkmode}
export {lastWinner, p1Color, p2Color}

import { registerPlayers } from "./Modules/register-players.js"
import { startGame } from "./Modules/start-game.js"
import { winCondition } from "./Modules/highlight-win-condition.js"

const registerBtn = document.getElementById('register-btn')
const playBtn = document.getElementById('play-btn')
const allBtnofBoard = document.querySelectorAll('.btn')

let players = []
let round = 0
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
allBtnofBoard.forEach(function(btn){
  btn.addEventListener('click', function(){
    if(round%2 !== 0){
      console.log(`Round Atual: ${round} (P1)`)
      btn.innerText = 'X'
      btn.style.color = p1Color
      boardSquares[btn.id] = 'X'//Os id dos elementos btn correspondem aos índices do tabuleiro
      btn.disabled = true
      winCondition(boardSquares)//Verifico se alguma condição de vitória foi atingida
      round++
      playerTurn.value = players[1][0]
      return
    }else{
      console.log(`Round Atual: ${round} (P2)`)
      btn.innerText = 'O'
      btn.style.color = p2Color
      boardSquares[btn.id] = 'O'
      btn.disabled = true
      winCondition(boardSquares)
      round++
      playerTurn.value = players[0][0]
      return
    }
  })
})