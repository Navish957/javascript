//conversions are mostly asked in interviews.
//1.
let a = true;
let b = false;
console.log(b + 1); // prints - 1
console.log(a + 1); // prints - 2
console.log(typeof(a + 1)); // number
//it happened because js consider true = 1 and false = 0

//2.
let c = "1";  //string
console.log("1" + 1); //prints = 11 but data type is string
console.log(typeof("1" + 1)); //string
console.log(Number("1" + 1)); // prints 11 but datatype is number
console.log(typeof Number("1" + 1)); // number

//3.
let value = "2abc";
console.log(typeof ("2abc" + 2));  // prints = 2abc2 and datatype is string
console.log(Number(value)); //prints NaN
console.log( typeof Number(value)); // type of NaN is Number  

//4.
console.log(Number(null)); // prints = 0
console.log(typeof Number(null)); //prints =  number
console.log(Boolean(undefined)); //prints = false
console.log(Boolean(null)); //prints = false
console.log(Number(undefined)); //prints = NaN
console.log(Object(undefined)); //prints = {}
console.log(Object(null)); //prints = {}
