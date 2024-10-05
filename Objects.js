//singleton = when object made by constructor

//object literals = not a singleton one

//declaring symbols in the object

const mySym = Symbol("key1");

const user = {name: "Navish",
     age: 24, 
     [mySym]: "key1", //synbol in object
     isLoggedIn: true,
     lastLogginDays: ['Monday' , 'wednesday' , 'sunday']
    }
    //method.1 - of declaring the objects = most preferable
// console.log(user);
// console.log(user.age);

//method 2. -- of declaring the objects
// console.log(user["name"]);

//symbol-console
// console.log(user[mySym]);

//to freeze a value of object
user.email = 'abc@gmail.com'
//Object.freeze(user);
user.email = 'def@gmail.com'
// console.log(user.email);

//assign the value to the user object using function.
const greetings = function(){
    console.log("hello this is learning purpose");
}
// console.log(greetings());

//singelton objects =  using constructor
const userOne = new Object()
userOne.id = "123abc";
console.log(userOne.id);

//nested objects

const regularUser = {
    email: "navish@gmail.com",
    fullname: {
        firstname: "Navish",
        lasname: "Thakur",
        cars: {
            xuv: ['harrier', 'range', 'xuv700'],
            company: ['Tata', 'Range', 'Mahindra']
        },
        booksWritten: ['abc', 'def', 'xyz']
        
    }
}
//print bookwritten xyz
console.log(regularUser.fullname.booksWritten[2]);

//to find all the keysof the objects
 console.log(Object.keys(regularUser));  //datatype => array 

//to find all the values of the objects
console.log(Object.values(regularUser));  //datatype => object 

//to find whether has property or not
console.log(regularUser.hasOwnProperty('firstname'));  //false because it is in the nested arrays.


//concat of objects using asssign(target{},sources)
const obj1 = {1:'a' , 2:'b' , 3:'c'};
const obj2 = {2:'aa' , 4:'bbbb' , 6:'cccccc'};

const obj3 = Object.assign({} , obj1 , obj2);
console.log(obj3);
//using spreadoperator
const obj4 = {...obj1,...obj2};
console.log(obj4);

//objects in array

const array = [
    {

    },
    {

    },
    {

    }
]
