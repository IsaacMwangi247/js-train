let a = 11
let b = 10
let c = a + b
console.log(c)


function add_numbers(){
    let a = 12
    let b = 10
   return a + b
}


sum = add_numbers()
console.log(sum)


function sum_numbers(x,y){
    return x + y
}

sum1 = sum_numbers(12,12)
sum2 = sum_numbers(12,10)

console.log(sum1)
console.log(sum2)

//write a program that takes user input of a random number and checks whether or not its even using functions
let number = Number(prompt("Enter number"))
function check_even(num){
    if(num%2==0){
        result = "even"
    }else{
        result = "odd"
    }
    return result
}
even = check_even(number)
console.log(even)

