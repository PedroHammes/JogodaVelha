import { players, lastWinner, p1Color, p2Color, round} from "../index.js"

export {highlightWinCondition, winCondition}

let winner
let vp1 = document.getElementById('VP1')
let dp1 = document.getElementById('DP1')
let ep1 = document.getElementById('EP1')
let vp2 = document.getElementById('VP2')
let dp2 = document.getElementById('DP2')
let ep2 = document.getElementById('EP2')

function highlightWinCondition(arrIndex1, arrIndex2, arrIndex3, playerColor){
  document.getElementById(arrIndex1).style.borderColor = playerColor
  document.getElementById(arrIndex2).style.borderColor = playerColor
  document.getElementById(arrIndex3).style.borderColor = playerColor
}

function winCondition(array){
  if((array[0] == array[1]) && (array[1] == array[2])){
    document.querySelectorAll('.btn').forEach(function(btn){btn.disabled = true})//Se alguma condição de vitória for atingida todos os botões ficam inativos (esta linha pode virar uma função depois)
    if(array[0] == 'X'){
      winner = players[0]
      lastWinner.innerText = players[0][0]
      players[0][1]++
      players[1][2]++
      vp1.value = players[0][1]
      dp2.value = players[1][2]
      highlightWinCondition(0, 1, 2, p1Color)
    } else {
      winner = players[1]
      lastWinner.innerText = players[1][0]
      players[0][2]++
      players[1][1]++
      dp1.value = players[0][2]
      vp2.value = players[1][1]
      console.log('MUDAR COR DO P2')
      highlightWinCondition(0, 1, 2, p2Color)
    }
    console.log(`Jogo encerrado.\nVencedor: ${winner} (sequência 1)\n Placar:`)
    console.log(boardSquares)
    console.log(players)
    return winner
  } else if((array[3] == array[4]) && (array[4] == array[5])){
    document.querySelectorAll('.btn').forEach(function(btn){btn.disabled = true})//Se alguma condição de vitória for atingida todos os botões ficam inativos
    if(array[3] == 'X'){
      winner = players[0]
      lastWinner.innerText = players[0][0]
      players[0][1]++
      players[1][2]++
      vp1.value = players[0][1]
      dp2.value = players[1][2]
      highlightWinCondition(3, 4, 5, p1Color)
    } else {
      winner = players[1]
      lastWinner.innerText = players[1][0]
      players[0][2]++
      players[1][1]++
      dp1.value = players[0][2]
      vp2.value = players[1][1]
      highlightWinCondition(3, 4, 5, p2Color)
    }
    console.log(`Jogo encerrado.\nVencedor: ${winner} (sequência 2)\n Placar:`)
    console.log(players)
    return winner //
  } else if((array[6] == array[7]) && (array[7] == array[8])){
    document.querySelectorAll('.btn').forEach(function(btn){btn.disabled = true})//Se alguma condição de vitória for atingida todos os botões ficam inativos
    if(array[6] == 'X'){
      winner = players[0]
      lastWinner.innerText = players[0][0]
      players[0][1]++
      players[1][2]++
      vp1.value = players[0][1]
      dp2.value = players[1][2]
      highlightWinCondition(6, 7, 8, p1Color)
    } else {
      winner = players[1]
      lastWinner.innerText = players[1][0]
      players[0][2]++
      players[1][1]++
      dp1.value = players[0][2]
      vp2.value = players[1][1]
      highlightWinCondition(6, 7, 8, p2Color)
    }
    console.log(`Jogo encerrado.\nVencedor: ${winner} (sequência 3)\n Placar:`)
    console.log(players)
    return winner //
  } else if((array[0] == array[3]) && (array[3] == array[6])){
    document.querySelectorAll('.btn').forEach(function(btn){btn.disabled = true})//Se alguma condição de vitória for atingida todos os botões ficam inativos
    if(array[0] == 'X'){
      winner = players[0]
      lastWinner.innerText = players[0][0]
      players[0][1]++
      players[1][2]++
      vp1.value = players[0][1]
      dp2.value = players[1][2]
      highlightWinCondition(0, 3, 6, p1Color)
    } else {
      winner = players[1]
      lastWinner.innerText = players[1][0]
      players[0][2]++
      players[1][1]++
      dp1.value = players[0][2]
      vp2.value = players[1][1]
      highlightWinCondition(0, 3, 6, p2Color)
    }
    console.log(`Jogo encerrado.\nVencedor: ${winner} (sequência 4)\n Placar:`)
    console.log(players)
    return winner //a
  } else if((array[1] == array[4]) && (array[4] == array[7])){
    document.querySelectorAll('.btn').forEach(function(btn){btn.disabled = true})//Se alguma condição de vitória for atingida todos os botões ficam inativos
    if(array[1] == 'X'){
      winner = players[0]
      lastWinner.innerText = players[0][0]
      players[0][1]++
      players[1][2]++
      vp1.value = players[0][1]
      dp2.value = players[1][2]
      highlightWinCondition(1, 4, 7, p1Color)
    } else {
      winner = players[1]
      lastWinner.innerText = players[1][0]
      players[0][2]++
      players[1][1]++
      dp1.value = players[0][2]
      vp2.value = players[1][1]
      highlightWinCondition(1, 4, 7, p2Color)
    }
    console.log(`Jogo encerrado.\nVencedor: ${winner} (sequência 5)\n Placar:`)
    console.log(players)
    return winner //
  } else if((array[2] == array[5]) && (array[5] == array[8])){
    document.querySelectorAll('.btn').forEach(function(btn){btn.disabled = true})//Se alguma condição de vitória for atingida todos os botões ficam inativos
    if(array[2] == 'X'){
      winner = players[0]
      lastWinner.innerText = players[0][0]
      players[0][1]++
      players[1][2]++
      vp1.value = players[0][1]
      dp2.value = players[1][2]
      highlightWinCondition(2, 5, 8, p1Color)
    } else {
      winner = players[1]
      lastWinner.innerText = players[1][0]
      players[0][2]++
      players[1][1]++
      dp1.value = players[0][2]
      vp2.value = players[1][1]
      highlightWinCondition(2, 5, 8, p2Color)
    }
    console.log(`Jogo encerrado.\nVencedor: ${winner} (sequência 6)\n Placar:`)
    console.log(players)
    return winner //
  } else if((array[0] == array[4]) && (array[4] == array[8])){
    document.querySelectorAll('.btn').forEach(function(btn){btn.disabled = true})//Se alguma condição de vitória for atingida todos os botões ficam inativos
    if(array[0] == 'X'){
      winner = players[0]
      lastWinner.innerText = players[0][0]
      players[0][1]++
      players[1][2]++
      vp1.value = players[0][1]
      dp2.value = players[1][2]
      highlightWinCondition(0, 4, 8, p1Color)
    } else {
      winner = players[1]
      lastWinner.innerText = players[1][0]
      players[0][2]++
      players[1][1]++
      dp1.value = players[0][2]
      vp2.value = players[1][1]
      highlightWinCondition(0, 4, 8, p2Color)
    }
    console.log(`Jogo encerrado.\nVencedor: ${winner} (sequência 7)\n Placar:`)
    console.log(players)
    return winner //
  } else if ((array[2] == array[4]) && (array[4] == array[6])){
    document.querySelectorAll('.btn').forEach(function(btn){btn.disabled = true})//Se alguma condição de vitória for atingida todos os botões ficam inativos
    if(array[2] == 'X'){
      winner = players[0]
      lastWinner.innerText = players[0][0]
      players[0][1]++
      players[1][2]++
      vp1.value = players[0][1]
      dp2.value = players[1][2]
      highlightWinCondition(2, 4, 6, p1Color)
    } else {
      winner = players[1]
      lastWinner.innerText = players[1][0]
      players[0][2]++
      players[1][1]++
      dp1.value = players[0][2]
      vp2.value = players[1][1]
      highlightWinCondition(2, 4, 6, p2Color)
    }
    console.log(`Jogo encerrado.\nVencedor: ${winner} (sequência 8)\n Placar:`)
    console.log(players)
    return winner //
  } else if(round == 9){ //
    document.querySelectorAll('.btn').forEach(function(btn){btn.disabled = true})//Se alguma condição de vitória for atingida todos os botões ficam inativos
    players[0][3]++
    players[1][3]++
    ep1.value = players[0][3]
    ep2.value = players[1][3]
    console.log(players)
    lastWinner.innerText = 'Empate'
    return console.log('Empate')
  }
}