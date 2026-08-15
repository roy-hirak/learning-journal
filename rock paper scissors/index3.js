let userWins=0
let computerWins=0
let computerRNG
function gameRNG(){
   computerRNG = Math.floor(Math.random()*3 +1)
   if(computerRNG == 1){
    computerRNG = "rock"
   }
   else if(computerRNG ==2){
    computerRNG = "paper"
   }
   else{
    computerRNG = "scissors"
   }
}

let userInput
function processInput(){
userInput = window.prompt(`Rock, Paper, Scissors!`)
userInput = userInput.trim().toLowerCase()
userInput.toString().replaceAll(" ","")
String(userInput).replaceAll("scissor", "scissors")
if(userInput == "rock" || userInput == "paper"|| userInput == "scissors"){
    return
}
else{
    // call this function again. ToDo
}
}
function declareWinner(){
    if(computerRNG == userInput){
        console.log("its a tie!")
    }
        else if(computerRNG == "rock"){
        if(userInput == "paper"){
            console.log("you win")
            userWins++
        }
        else{
            console.log("you lose")
            computerWins++
        }
    }
    else if(computerRNG == "paper"){
        if(userInput == "scissors"){
            console.log("you win")
            userWins++
        }
        else{
            console.log("you lose")
            computerWins++
        }
    }
    else if(computerRNG == "scissors"){
        if(userInput == "rock"){
            console.log("you win")
            userWins++
        }
        else{
            console.log("you lose")
            computerWins++
        }
    }
}
for(i = 0; i <= 0; i++){
    processInput()
    gameRNG()
    declareWinner()
}
console.log(userWins)
console.log(computerWins)
console.log(computerRNG)



    
