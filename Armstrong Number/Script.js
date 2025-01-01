let count = 0, PowerNumber, sum = 0
let number = parseInt(prompt("Enter a number"))
let actualNum = number
while(number > 0){
    count++
    number = Math.floor(number/10)
}
number = actualNum
while(actualNum > 0){
    remainderNum = actualNum%10
    PowerNumber = Math.pow(remainderNum, count)
    sum+=PowerNumber
    actualNum = Math.floor(actualNum/10)
}
if(number === sum){
    alert("It is Armstrong number")
}
else{
    alert("It isn't Armstrong number")
}