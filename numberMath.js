const score = 400;

//another way of declaring numbers
const balance = new Number(500);
// console.log(score); //datatype = number
// console.log(balance); //datatype = object

//tostring() -- will become string
 console.log(balance.toString());

//tofixed() -- to provide precision value eg- ecommerce website
 console.log(balance.toFixed(3));  //500.00

const anotherNum = 23.896546451;
 console.log(anotherNum.toPrecision(5)); //24
// console.log(typeof anotherNum.toPrecision(2)); //STRING

//tolocalestring()-- used to give commas in the digts
 const bigNum = 10000000
//  console.log(bigNum.toLocaleString());  //1,00,00,000

//max value and minvalue 

//================MATHS===================

console.log(typeof Math);  //object

console.log(Math.abs(-10)); //10 --converts -ve value to +

console.log(Math.round(4.4)); //4
console.log(Math.round(4.7)); //5

console.log(Math.ceil(4.2));  //5
console.log(Math.floor(4.9));  //4

console.log(Math.min(1,2,3,4,5,6,7,8,9,0));  //0
console.log(Math.max(1,2,3,4,5,6,7,8,9,0));  //9

console.log(Math.random()); //always between 0-1
console.log(Math.random()*10 + 1 ); //

//generate random maths between 20 and 50
const min = 20;
const max = 50
console.log(Math.floor(Math.random() * (max - min + 1)) + min);












 



