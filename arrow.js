//this refers to the current context.
//this cant be used in functions ,they are used in objects only.
const user = {
    userName : "Navish",
    age : 23,
    welcomeMessage : function() {
        console.log(`${this.userName} , welcome to the website`);
    }
}
user.welcomeMessage();
user.userName = "Thakur";
user.welcomeMessage();

//another way of decalring function which is known as expression
const chai = function(){
    return `chai is tasty`;
}
console.log(chai());


//arrow function
// const arrowFun = () => {

// }

//1. basic arrow function
const multiplyTwo = (num1 , num2) => {
    return num1 * num2;
}
console.log(multiplyTwo(10 , 5));

//2. implicit return arrow function = removal of curly braces and no return keyword is used & in place of "return" , () are being used.

const addTwo = (num1 , num2) => ( num1 + num2) 
console.log(addTwo(10 , 5));


//3. declaring objects in implicit return arrpw function.

const myObj = () => ({userName : "Navish"})
console.log(myObj());


