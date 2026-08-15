const minnum = 1
const maxnum = 100
let attempts = 0
let rng = 0
let guess
rng = Math.floor(Math.random()*(maxnum - minnum ) + minnum + 1)
while(rng!=guess)
    {guess = window.prompt(`Guess The Number 1-100!`)
    if(isNaN(guess)){
        window.alert(`input a number instead..`)}
        else if(guess >100 || guess <0){
        window.alert(`Enter a valid number!`)}
            else if(guess>rng){
            window.alert(`enter a smaller number..`)
            attempts++}
            else if(guess<rng){
            window.alert(`enter a bigger number..`)
            attempts++}
            else{
                window.alert(`Correct!`)
                document.getElementById("h11").textContent = `Well done! you took ${attempts} attempts`
            }}
    
            
            
