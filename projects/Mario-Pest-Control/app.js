var cost = document.cost

cost.addEventListener("submit", function(event){
    event.preventDefault()

 var num1 = cost.goombas.value 
 var num2 = cost.bobombs.value 
 var num3 = cost.cheepCheeps.value

 totalSum = (Number(num1) * 5 + Number(num2) * 7 + Number(num3) * 11)
    console.log(totalSum)
document.getElementById("owe").textContent = totalSum


})