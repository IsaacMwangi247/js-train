let number = Number(prompt("Enter number"))

if (number%2==0){
    console.log("Even")
}else{
    console.log("Odd")
}


let value = Number(prompt("Enter number"))
let check_even = value % 2==0 ? "Even" : "Odd"
console.log(check_even)


let age = Number(prompt("Enter age: "))
let can_vote = (age >= 18) ? "Can vote, is of age":"Can't vote"
console.log(can_vote)