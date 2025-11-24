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
                                            // 10-20 = -10

let birth_year = Number(date_parts[0])
let birth_month = Number(date_parts[1])
let birth_day = Number(date_parts[2])

let todayYear = 2025 
let todayMonth = 12
let todayDay = 24
 // 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30 -sept
 // 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31 -oct
 // 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30 -nov

let monthDays = [31,28,31,30,31,30,31,31,30,31,30,31] 

if(birth_date > todayDay){
    todayMonth-- // 12-1 = 11
    todayDay += monthDays[(todayMonth-1 + 12) % 12]// (11 -1 + 12)%12 = 22% 12 = 10
}



