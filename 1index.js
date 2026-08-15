const increaseBtn = document.getElementById("increaseBtn")
const resetBtn = document.getElementById("resetBtn")
const decreaseBtn = document.getElementById("decreaseBtn")
const visualCounter = document.getElementById("visualCounter")
let count = 0

increaseBtn.onclick = function(){
   count ++;

   visualCounter.textContent = count;
}
decreaseBtn.onclick = function(){
   count --;

   visualCounter.textContent = count;
}
resetBtn.onclick = function(){
   count = 0;

   visualCounter.textContent = count;
}