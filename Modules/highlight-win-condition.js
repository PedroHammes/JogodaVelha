export {highlightWinCondition}

function highlightWinCondition(arrIndex1, arrIndex2, arrIndex3, playerColor){
  document.getElementById(arrIndex1).style.borderColor = playerColor
  document.getElementById(arrIndex2).style.borderColor = playerColor
  document.getElementById(arrIndex3).style.borderColor = playerColor
}