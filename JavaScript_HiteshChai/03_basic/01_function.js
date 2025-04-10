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
console.log("result:",result);


function userloggedin(username="sohan"){
    if(!username){
        console.log("Enter a username");
        return;
    }
    return `${username} is logged in`;
}
// console.log(userloggedin("satya kumar"));
// console.log(userloggedin(""));//is logged in
console.log(userloggedin());//undefined


