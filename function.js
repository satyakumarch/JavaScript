// const hello = ()=>{
//     console.log("hey how are you?")
//     return "hi"
// }


// const hello=()=>{
//     console.log("hello how are you?");
//      return"hi";
// }
// console.log("hello satya",hello());

// function oneplus(x,y) {
//     console.log("done")
//     return Math.round(1+(x+y)/2)
// }
// let a=3;
// let b=4;
// let c=5;
// let v=hello()
// console.log("one plus  Average of a and b is:",oneplus(a,b))
// console.log("one plus  Average of b and c is:",oneplus(b,c))
// console.log("one plus  Average of c and a is:",oneplus(c,a))


// const powerrtwo =(n)=>{
//     return n**2
// }
// function powercube(powertwo,n){
//     return powerrtwo(n) * n
// }
// console.log(powercube(powerrtwo,3));

// function sayhello(){
//     return ()=>{
//         console.log("hello hitesh")
//     }
// }
// let guessvalue=sayhello()
// console.log(guessvalue);




// const higherorder=n=>{
//     const onefun=m=>{
//         const twofun= p=>{
//             return m+n+p;
//         }
//         return twofun
//     }
//     return onefun
// }
// console.log(higherorder(2)(3)(4))


// const mynums=[2,3,4,5] 
// const sumarray=arr=>{
//     let total=0
//     arr.forEach(function(element){
//         total =total+ element;
//     });
//     return total
// }
// console.log(sumarray(mynums));

const mynum=[2,3,4,5,6];
const sumarray=arr=>{
    let total=0;
    arr.forEach(function(element) {
        total=total+element;
        
    });
    return total;
}
console.log(sumarray(mynum));



