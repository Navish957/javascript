//array is non-primitive datatypes, resizable & multiple datatypes can be added.
//shallow copy-arrays copies share the same refernce point. 
// deep copy- array's copies dont share same reference point.
 
const myArr = [1,2,3,4,5]
console.log(myArr[2]);

// const arr = new Array[6,7,8,9]

//1. methods of array --

//push() - -
myArr.push(6);
console.log(myArr);

//pop()
myArr.pop()
console.log(myArr);

//unshift() -- insert the new value at the beginning of the array
myArr.unshift("unshift");
console.log(myArr);

//shift() -- 1st index deleted automaticalluy
myArr.shift();
console.log(myArr);

//methodes which provide answer in true/false..

//includes()-- whether the value exists or not
console.log(myArr.includes(9));

//indexof() -- -1 means dont exist in the array  
console.log(myArr.indexOf(2));

//join() -- convert the array into the string.
console.log(myArr.join());     //datatype is string

//slice and splice --

console.log("A" , myArr);
//slice() -- last range is not included and doesnt manipulate the original array. 
const myn1 = myArr.slice(1,3)
console.log(myArr);   //[ 1, 2, 3, 4, 5 ]
console.log(myn1);     //[ 2, 3 ]

//splice --last range is included and manipulates the original array , splice() get extracted from the the original array.
const myn2 = myArr.splice(1,3)
console.log(myArr);   //[ 1, 5 ]
console.log(myn2);    //[ 2, 3, 4 ]

const marHeroes = ["thor", "cAmerica" , "ironMan"]
const inHeroes = ["krish" , "RaOne"]

//conact() --  ...array,...
let allHeroes = marHeroes.concat(inHeroes)
console.log(allHeroes);

//spread operator = ...arra...
const allNHeroes = [...marHeroes,...inHeroes]
console.log(allNHeroes);

//nested arrays -- 
const nestArr = [1 , 2 , 3 , [4 , 5], 6 , [7, [ 8 , 9 , 0]]]
const flatArr = nestArr.flat(Infinity);
console.log(flatArr);

//from() -- any value given in the from will converted to the array. --of()
console.log(Array.from("thakur"));

//isArray()  -- whether the given value is array or not.
console.log(Array.isArray("thakur"));





