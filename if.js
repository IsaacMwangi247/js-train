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


let year = Number(prompt("Enter year"))

if (year%4==0 && year%100 !=0){
    console.log("Leap year")
}else if(year%400==0){
    console.log("Leap year")
}else{
    console.log("Not leap")
}


if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
    console.log("Leap")
}else{
    console.log("Not leap")
}


let student_score = Number(prompt("Enter score"))
let attendance = Number(prompt("Enter attendance"))


if( student_score > 90){
    if (attendance > 80){
        console.log("Excellent student")
    }else{
        console.log("Good score but poor attendance")
    }
}else{
    if(attendance > 80){
        console.log("Poor score but good attendance")
    }else{
        console.log("Poor score and poor attendance")
    }
}

if (student_score > 90 && attendance > 80 ){
    console.log("Excellent student")
}else if(student_score > 90 && attendance < 80){
    console.log("Good score but poor attendance")
}else if (student_score < 90 && attendance > 80){
    console.log("Poor score and good attendance")
}else{
    console.log("Poor score and poor attendance")
}