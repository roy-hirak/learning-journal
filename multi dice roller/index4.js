const values =[]
let diceImg=[]

function genRNG(){
  let diceRNG = Math.floor(Math.random()*6 +1)
  return diceRNG
}

function rollDice(){
  values.length = 0
  diceImg.length = 0
   let noOfDice = document.getElementById("noOfDice").value
for(let i=0; i < noOfDice ; i++){
    roll = genRNG()
    values.push(roll)
    diceImg.push(`<img src="imgs/Dice-${roll}.png" alt="dice ${roll}">`)
}
diceResult.textContent = `dice: ${values.join(', ')}`
diceImages.innerHTML = diceImg.join(``)
}

