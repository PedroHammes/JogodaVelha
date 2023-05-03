export let players = []
export const registerBtn = document.getElementById('register-btn')

//REGISTRO DE JOGADORES
registerBtn.addEventListener('click', function () {
  const player1 = document.getElementById('player-1').value
  const player2 = document.getElementById('player-2').value

  document.getElementById('p1').innerText = player1
  document.getElementById('p2').innerText = player2

  players.push([player1])
  players.push([player2])



  return console.log(players)
})