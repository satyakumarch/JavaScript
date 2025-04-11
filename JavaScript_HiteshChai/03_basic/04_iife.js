//Immediately invoked function expression (IIEF)

// (function chau(){
//     //named IIFE
//     console.log( `satya kumar chaudhary`)
// })();

// ((name)=>{
// console.log(`your name is ${name}`);
// })("krishna");


(function chai() {
    console.log("This is the first IIFE");
})();

(function withcode(name) {
    console.log(`your name is ${name}`);
})("moha ram shyam");
