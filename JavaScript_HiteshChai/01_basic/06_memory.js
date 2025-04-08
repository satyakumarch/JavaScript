/*
stack(LIFO)primitive vs heap non-primitive (dynamic memory allocation)
heap is used for dynamic memory allocation, where the size of the data structure can change at runtime.
*/
// stack is used for static memory allocation, where the size of the data structure is known at compile time.
let youtubechannel="satya kumar";
let anotheryoutubechannel=youtubechannel;
anotheryoutubechannel="satyakumarchaudhary";
// console.log(youtubechannel); //satyakumar
// console.log(anotheryoutubechannel); //satyakumarchaudhary

let userone={
    email:"satya@gmail.com",
    upi:"satya@ubl"
};

let usertwo=userone;
usertwo.email="mohan@gmail.com";

console.log(userone);
console.log(usertwo);