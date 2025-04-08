// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

// For example, in JavaScript, you can do the following:

// let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean
// On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

// Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

// int x = 10; // x is a variable of type int
// String name = "John"; // name is a variable of type String
// JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.



// 7 primitive data types
// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

//Non primitive data types
// 1. Object
let myobj={
    name:"satya",
    age:23,
    isloggened:true,
    address:{
        city:"Nepal",
        country:"Nepal"
    },
    hobbies:["cricket","football"],
    score:100.5
}
console.log(myobj);
// 2. Array
const hero=["satya","kumar",100,100.5,true,null,undefined];
// 3. Function
function myFunction(){
    console.log("hello world");
}
myFunction();
// 4. Date
const date=new Date();
console.log(date);

const score=100;
const score1=100.5;
const score2=100.5e3; //100500
const isloggened=true;
const outsidetemp=null;
const useraddress=undefined;
let useremail;
const useraddress1=null;
console.table([score,score1,score2,isloggened,outsidetemp,useraddress,useremail,useraddress1]);

const id=Symbol('123');
const anothersymbol=Symbol('123');
console.log(typeof anothersymbol);

// https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html