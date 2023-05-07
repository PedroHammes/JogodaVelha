import { players } from "../index.js"
export {registerPlayers}

function registerPlayers() {
  const player1 = document.getElementById('player-1').value
  const player2 = document.getElementById('player-2').value

  if(player1 === player2 || player1 === ''){
    document.getElementById('player-1').value = ''
    document.getElementById('player-2').value = ''
    document.getElementById('player-1').style.border = `2px solid ${p1Color}`
    document.getElementById('player-1').setAttribute('placeholder', '*Obrigatório')
    document.getElementById('player-2').style.border = `2px solid ${p1Color}`
    document.getElementById('player-2').setAttribute('placeholder', '*Obrigatório')

    alert(`[!ERROR]\nPlayer 1 e PLayer 2 precisam ser definidos e não podem ter o mesmo nome.\n\nPlayer 1: ${player1}\nPlayer 2: ${player2}`)

  }else{
    players.push([player1])
    players[0].push(0)
    players[0].push(0)
    players[0].push(0)
    players.push([player2])
    players[1].push(0)
    players[1].push(0)
    players[1].push(0)
  
    document.getElementById('p1').innerText = player1
    document.getElementById('p2').innerText = player2
  }
  return console.log(players)
}