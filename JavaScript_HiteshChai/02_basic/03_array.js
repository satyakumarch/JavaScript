const mysum=Symbol("key1");

const userset={
    name:"satya kumar",
    "full name":"satya kumar chaudhary",
    age:18,
    reg:12203506,
    [mysum]:100,
    branch:"CSE",
    college:"Lovely  Professional University",
    location:"punjab",
    hobbies:["coding","reading","gaming"],
    ismarried:false,
   
}
console.log(mysum);
console.log(userset[mysum]);
console.log(userset["full name"]);
console.log(userset.name);
console.log(userset.age);