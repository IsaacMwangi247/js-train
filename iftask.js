// let str = prompt("Enter value")

// if ((str.length == 0) || (str.trim.length == 0)){
//     console.log('Empty')
// }else if(typeof(Number(str)) == "number"){
//     console.log("Number")
// }else{
//     console.log("Text")
// }


// if ((str.length == 0) || (str.trim.length == 0)){
//     console.log('Empty')
// }else if(Number.isNaN(Number(str))){
//     console.log("Text")
// }else{
//     console.log("Number")
// }

let num = Number(prompt("Enter num"))


console.log(num)

if (typeof(num) != "number"){
    console.log("Not a number")
}else if(Number.isInteger(num)){
    console.log("Integer")
}else{
    console.log("Float")
}


let num2 = prompt('Enter num2')
if (typeof(Number(num2)) != "number"){
    console.log("Not a number")
}else if(num2.includes(".")){
    console.log("Float")
}else{
    console.log("Integer")
}



let month = prompt("Enter a month")
// "september" , "SEPTEMBER" "September", "SeptemBER" -> "september"
let uniform_month = month.toLowerCase()
if (uniform_month == "september" || uniform_month == "october" || uniform_month == "october"){
    console.log("Autumn")
}else if(uniform_month == "december" || uniform_month == "january" || uniform_month == "february"){
    console.log("Winter")
}else if(uniform_month == "march" || uniform_month == "april" || uniform_month == "may"){
    console.log("Spring")
}else if(uniform_month == "june" || uniform_month == "july" || uniform_month == "august"){
    console.log("Summer")
}else{
    console.log("Invalid month entered")
}