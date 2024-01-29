// var vari1=1;
// one();
// two();
// console.log(vari1)
// function one(){
//     var a=10;
//     console.log(a);

// }
// function two(){
//     var b=20;
//     console.log(b);
// }
// let userName = prompt("Please enter your name:"); 
// console. log("Hello, " + userName + "!");

// function number1to5(){
//     for(let i=0;i<=5;i++){
//         console.log(i);
//     }
// }
// number1to5();

 

// function name(){
//     console.log("satya kumar chaudhary");
// }
// name();



// function isAdult(){
//     let age=10;
//     if(age>=18){
//         console.log("The man is adult.")
//     }else{
//         console.log("The man is child.");
//     }
// }
// isAdult();


// function isgreater(){
//     let a=600;
//     let b=100;
//     if(a>b){
//         console.log(a," is grater than",b)
//     }else{
//         console.log(a,"is smaller than ",b);
//     }
// }
// isgreater();


//function with Arguments 

// function printinfo(name,age,mark){
//     console.log("name:",name,"\nage:",age,"\nmark:",mark);
// }
// printinfo("satya kumar",23,44);
// printinfo("mohan kumar",25,46);
// printinfo("shivam kumar",41,43);


//to find the average og 3 number
//   function average(num1,num2,num3){
//     console.log((num1+num2+num3)/3);

//   }
//   average(10,10,10);


//using function tio print table
// function printtable(n){
//     for(let i=n;i<=n*10;i+=n){
//         console.log(i);
//     }
// }
// printtable(2);




//return
// function multiple(a,b,c){
//     return (a+b+c);
// }
// //let m=multiple(5,5,5);
// console.log(multiple(multiple(5,5,5),6));


// function isAdult(age){
//     if(age>=18){
//         return "adult."
//     }else{
//         return "Not adult"
//     }
// }
// console.log(isAdult(34));
// console.log("bye bye"); 


// function sum(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum+=i;
//     }
    
// }
// return sum(5); 
//console.log(getsum(4));

//create a function that return the concatenation of all string in an arrayObject.entries
// let str=["hello","hi","bye","!"];

// function concat(str){
//     let result="";

//     for(let i=0;i<str.length;i++){
//         result+=str[i];
//     }
//     return result;
// }
// let cat=concat(str);
// console.log(cat);





//higher order function
// function multiplegreat(func,count){
//     for(let i=1;i<=count;i++){
//         func();
//     }
// }
// let greet=function(){
//     console.log("hello");
// }
// console.log(multiplegreat(greet ,5));



const calculator={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    },
    div(a,b){
        return a/b;
    },
}
console.log(calculator.add(10,5));
console.log(calculator.mul(10,5));
console.log(calculator.sub(10,5));
console.log(calculator.div(10,5));