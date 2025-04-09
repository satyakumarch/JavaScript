const name="satya kumar";
const age=23;
console.log(`my name is ${name} and my age is ${age}`);


const gamename=new String("pubg mobile");
console.log(gamename); //String { "pubg mobile" }
console.log(gamename.length); //11  
console.log(gamename[0]); //p
console.log(gamename.__proto__); //String {}
console.log(gamename.__proto__.__proto__); //Object { }
console.log(gamename.__proto__.__proto__.__proto__); //null
