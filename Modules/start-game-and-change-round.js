import { players } from "./player-registration.js"
import { boardSquares, winner, loser, lastWinner, txtDarkmode, p1Color, p2Color,  vp1, dp1, ep1, vp2, dp2, ep2, playerTurn } from "../index.js"


let round

export function startGame () {
  playerTurn.value = players[0][0]
  round = 1
  document.querySelectorAll('.btn').forEach(function(btn){ //tentativa de limpar e reablitar todos os botões
    btn.disabled = false
    btn.innerText = ''
    btn.style.borderColor = txtDarkmode
  })
  for(let i=0; i<boardSquares.length; i++){
    boardSquares[i] = i
  }
  console.log(boardSquares)
  return
}

export function changeRound(btn){
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
}