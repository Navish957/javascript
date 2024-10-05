let name = "hello";
let age  = 50;
//using template litrols
console.log(`${name} and ${age}.`);
// can be declared using new keyword
let userName = new String("Navish")   //data types will be object
console.log(userName[0]);
//length--which is a property used to find the string length
console.log(userName.length);

//1. methods used for extracting the string character.

//touppercase()- is a method used to convert letters of the string to uppercase
console.log(userName.toUpperCase());
//charAt()- is a method used to find the the character by using its index
console.log(userName.charAt(3));
//charcodeAt() - is a method  return code of character at a specified index & method returns utf-16 code.
console.log(userName.charCodeAt(1));
//at() - a new addditon it can use the negative indexes which charAt() doesnot.

//2. methods used for extracting  a part of string

//substring()- it doesnt include last value and if we omit last value it will slice out rest of thing.
let newStr = userName.substring(2);
console.log(newStr);   //vi

//slice()- it can take negative values and in that case, it will run from reverse. it doesnt change the original string.
let stuName = "Ayush";
let slice = stuName.slice(0, 3);
console.log(slice); //Na
console.log(stuName);


//trim() -- is used to remove unnecesssary characters or spaces etc.& has trimstart() , trimend().
let trim = "     hello"
console.log(trim);
console.log(trim.trim());

//replace() -- used to replace the existing characters with new character
const webSite = "https://www.thakur@422.com"
const replaced = webSite.replace('@422', '-Navish')
console.log(replaced);

//padstart()/padend() -- used to pads before or afer the string 
let numb = "5";
console.log(numb.padStart(4,"X"));  //XXXX5
console.log(numb.padEnd(4,"X"));  //5XXXX

//repeat() -- used to repeat the outputs
console.log(numb.repeat(3));

//to convert into array - by using split() -- seperator
const split = "a-b-c-d-e-f";
console.log(split.split("-", 2));  //[ 'a', 'b' ]
console.log(split.split("-"));   //[ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(split.split());   //[ 'a-b-c-d-e-f' ]










