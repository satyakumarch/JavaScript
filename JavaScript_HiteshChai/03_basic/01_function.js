function name(){
    console.log("s");
    console.log("a");
    console.log("t");
    console.log("y");
    console.log("a");
}
// name();
//////////////////one method//////////////////////
// function add(a,b){
//     let result=a+b;
//     console.log(result);
// }
// add(2,3);

//////////////////another method//////////////////////
function add(a,b){
    // let result=a+b;
    // return result;
    return a+b;
}
const result=add(2,3);
// console.log("result:",result);


function userloggedin(username="sohan"){
    if(!username){
        // console.log("Enter a username");
        return;
    }
    return `${username} is logged in`;
}
// console.log(userloggedin("satya kumar"));
// console.log(userloggedin(""));//is logged in
// console.log(userloggedin());//undefined



function calculatecartprice(val1,val2,...num){
    return num;
}
// console.log(calculatecartprice(1,2,3,4,5,6,7));


const user={
 name:"satya kumar",
 age:23,
}
 
function handleObject(anyobject){
    console.log(`Name is ${anyobject.name} age is ${anyobject.age}`);
    console.log(`Name is ${user["name"]} age is ${user["age"]}`);
}
handleObject({user:"mohan",age:34});

const array=[100,200,300,400,500];

function returnSecondElement(getarray){
    return getarray[1];
}
console.log(returnSecondElement(array));
console.log(returnSecondElement([1,2,3,4,5]));