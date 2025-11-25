let base = Number(prompt("Enter base of triangle:"));
let height = Number(prompt("Enter height:"));

function getArea(b, h) {
  return 0.5 * b * h;
}

let area = getArea(base, height);
console.log(area);

function checkPassword() {
  let attempts = 0;
  let result;
  while (attempts < 4) {
    let password = prompt("Enter password: ");
    if (password == "admin@123") {
      result = "Access granted";
      break;
    }
    attempts++;
    if (attempts >= 4) {
      result = "Blocked";
    }
  }
  return result;
}
password = checkPassword();
console.log(password);

// Write a program that calculates the total stock in a
// company from the array/list below if we know that the stock
// is the last digit in every array/list.

let prods = [
  ["omo", "30kshs", "300"],
  ["milk", "50kshs", "200"],
  ["bread", "45kshs", "359"],
  ["coffee", "5kshs", "79"],
];

//no 10
function getStock(arr){
    let stock = 0
    for(i=0;i<arr.length;i++){
        stock += Number(arr[i][2])
    }
    return stock
}
let stock = getStock(prods)
console.log(stock)

// Write a program that takes input of 2 values 
// and adds them. The program should only accept 
// numbers and floats only or otherwise display an error 
// “invalid character entered” and take the user to re-enter the inputs .
// ---> isNaN()

//---> no 11
// Write a program that takes the date of birth 
// of a person and the program outputs the age in terms of
//  years,months,days TODAY.datetime

let birth_date = prompt("Enter birth date in the format: YYYY-MM-DD")
//"1990-05-20"

let date_parts = birth_date.split('-') //['1990','05','20'] ---  ['2025','11','10']
                                            // 10-20 = -10 -> 35y 5m 21days
                                            // 35y 6m -10 + 31d (21)

let birth_year = Number(date_parts[0])
let birth_month = Number(date_parts[1])
let birth_day = Number(date_parts[2])

let todayYear = 2025 
let todayMonth = 11
let todayDay = 10

let monthDays = [31,28,31,30,31,30,31,31,30,31,30,31]// 0 -1 = -1


if(birth_date >= todayDay){
    todayMonth--  //11 - 1 = 10
    todayDay += monthDays[(todayMonth-1 + 12) % 12]//10 - 1 + 12 = 21%12 = 9
}

let calculated_days = todayDay - birth_day 
let calculated_month
let calculated_years

if(birth_month > todayMonth){
    calculated_month = 12 - (birth_month - todayMonth) 
    calculated_years = todayYear - birth_year - 1
}else{
    calculated_month = todayMonth - birth_month
    calculated_years = todayYear - birth_year
}
console.log(`${calculated_years} years, ${calculated_month} months, ${calculated_days} days`)


