let addition = 4 + 5;  //9
let sub = 5 - 4; //1
let multi = 5 * 4;  //20
let divide = 8 / 2; // 4
let remainder = 5 % 4; //1
let expo = 2 ** 3;  //2^3 = 8
// console.log(remainder);

//uniary operators
let myScore = 100;
myScore++  // 101 - increment operator & post increment
let credits = 55;
credits--; //54 - decrement operator & post decrement
// console.log(credits);

let score = 100;
let bonus = 99;
let totalScore = score + bonus ;
//  console.log(addition);
//  console.log(totalScore);

//comparison operator - <, >, == , ===, !=, !==, <=, >=   RETURNS BOOLEAN VALUE

let num1 = 3;
let num2 = 4;
let num3 = "3";

console.log(num1 !== num3);

//LOGICAL OPERATORS -  returns boolean value
//&& - and
// || - or
//! - not(reverse)

let student = "rahul";
let feesPaid = true;
let attendance = true;
if (feesPaid && attendance) {
    console.log(`${student} is ready to sit in examinations`);
} else {
    console.log(`${student} is not allowed to sit in the examination`);
}

//asignment operator- =, +=, -=, *=, /=, %=, **= 
  // x += y  => x= x+y

//operator precedence  

let pre = ((2 * (3 + 2)) - 1);
console.log(pre);
