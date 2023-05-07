import { players, playerTurn, boardSquares, txtDarkmode } from "../index.js"
export {startGame}

let round = 0
function startGame() {
  round = 1 //é o round 1
  playerTurn.value = players[0][0] //é a vez do Player 1

  document.querySelectorAll('.btn').forEach(function(btn){
    btn.disabled = false //habilito todos os botões para serem clicados
    btn.innerText = '' //removo os X e O da partida anterior
    btn.style.borderColor = txtDarkmode //removo as marcações da vitória da última partida
  })

  for(let i=0; i<boardSquares.length; i++){ //reseto os valores do tabuleiro para o padrão.
    boardSquares[i] = i
  }
  return
}