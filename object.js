// const sales = "Toyota";

// function carTypes(name) {
//   return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
// }

// const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

// console.log(car.myCar); // Saturn
// console.log(car.getCar); // Honda
// console.log(car.special); // Toyota

// const classinfo=[
//   {
//     name:"satya",
//     age:34,
//     mark:99,
//   },
//   { 
//     name:"shivam",
//     age:23,
//     mark:89,
//   },
//   {
//     name:"gaurav",
//     age:25,
//     mark:80,
//   },
// ];
// console.log(classinfo);
// console.log(classinfo[0]);
// console.log(classinfo[1]);



//object of object
// const classinfo={
//   aman:{
//     grade:"A+",
//     city:"delhi"
//   },
//   satya:{
//     grade:"+B",
//     city:"kathmandu"
//   },
//   mohan:{
//     grade:"C+",
//     city:"goa",
//   }
// };
// console.log(classinfo);
// console.log(classinfo.aman);
// console.log(classinfo.satya);

// console.log(classinfo.aman.city="mumbai");
// console.log(classinfo.satya.city);

// console.log(classinfo.aman.city);



const classinfo=[
{
  name:"satya",
  grade:"A+",
  city:"kathmandu",
},
{
  name:"shivam",
  grade:"B+",
  city:"vagalput",
},
{
  name:"gaurav",
  grade:"C+",
  city:"Simla",
},
];
console.log(classinfo);
console.log(classinfo[0]);
console.log(classinfo[0].name);
console.log(classinfo[1].name);
console.log(classinfo[1].city="patna");
console.log(classinfo[1].city);
console.log(classinfo[1].push("ram"));

classinfo[1].push({class:"btech"});
console.log(classinfo[1]);

