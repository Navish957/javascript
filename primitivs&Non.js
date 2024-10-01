//PRIMITIVES

//Numbers
let balance = 120;
const newBalance = new Number(120);

console.log(typeof(balance));  //number
console.log(typeof(newBalance));  //object

//boolean
let isLoggedIn = true;
const checkisLoggedIn = new Boolean(true);

console.log(typeof(isLoggedIn));  //boolean
console.log(typeof(checkisLoggedIn));  //object--but it is not recommended

//undefind and null

let firstname;
console.log(firstname);  // undefined

// let lastname = "";
// console.log(lastname);  //empty

let lastname = " ";
console.log(lastname);  //empty

let parent = null
console.log(parent); //null

let book = undefined
console.log(book);  //undefined


//string
let myString = "hello";
let myStringOne = "gemini";
let myStringTwo = "thankyou !";
let greetings = `${myString} ${myStringOne} ${myStringTwo} for it.` 
console.log(greetings);  //template litrols

//symbols
let sm1 = Symbol('a');
let sm2 = Symbol('b');
 
console.log(sm1 == sm2);
