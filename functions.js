//just a container whih is packed in {} and can be excuted again and again.

// 1.
function makeTea(typeofTea) {
    return `Making ${typeofTea}`;
    //nothing can be inserted/printed after return in any function
}
const teaOrder = makeTea("green tea")
console.log(teaOrder);

//2.
function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for chai`;
    }
    return confirmOrder();
}
let orderConfirmation = orderTea("Chai");
console.log(orderConfirmation);

//3.
function addTwoNums(num1 , num2){
    return num1 + num2;
}
const sum = addTwoNums(5,8);
console.log(sum);

//4. shopping cart = rest operator

function calculateCartPrice(...num1) {  //rest operators(...) = tripledots
    return num1;
}
console.log(calculateCartPrice(10 , 20 , 30));  //[ 10, 20, 30 ]

//5.
function calculateAge(val1 , val2, ...num){
    return  num;
}
console.log(calculateAge(20 , 22 , 24 , 26 , 28 , 30));  //[ 24, 26, 28, 30 ]
//here val1 & val2 will be removed because they dont have rest operator

//Passing Objects in functions
const object = {
    name : "Rahul",
    age : 24
}
function objectHandling(anyObject) {  //here we can write anything
    return `username is ${anyObject.name} and age is${anyObject.age}`;
}
console.log(objectHandling(object)); // but here we have to pass argument by the original name of object.

//Passing Arrays in Function 
const movies = ["ironman" , "America" , "Hulk" , "SpiderMan"]; 
function moviesFun(anyArray){
    return `Hero of ${anyArray[0]} is Tony Stark and Hero of ${anyArray[3]} is Peter`;
}
console.log(moviesFun(movies));


