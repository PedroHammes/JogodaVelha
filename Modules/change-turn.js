import { boardSquares, playerTurn, p1Color, p2Color, players } from "../index.js"
import { winCondition } from "./highlight-win-condition.js"
export {changeTurn, round}

let round = 1
function changeTurn() {
  document.querySelectorAll('.btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      if(round%2 !== 0){
        console.log(`Turno Atual: ${round} (P1)`)
        btn.innerText = 'X'
        btn.style.color = p1Color
        boardSquares[btn.id] = 'X'//Os id dos elementos btn correspondem aos índices do tabuleiro
        btn.disabled = true
        winCondition(boardSquares)//Verifico se alguma condição de vitória foi atingida
        round++
        playerTurn.value = players[1][0]
        return
      }else{
        console.log(`Turno Atual: ${round} (P2)`)
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
}