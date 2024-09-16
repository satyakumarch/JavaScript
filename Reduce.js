// const arr=[5,1,3,2,6];
// //sum and max
// function findSum(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i];
//     }
//     return sum;

// }
// console.log(findSum(arr));
// const output=arr.reduce(function(acc,curr){
// acc=acc+curr;
// return acc;

// },0);
// console.log(output);


// const arr=[5,1,3,2,6];
// //sum and max
// function findMax(arr){
//     let max=0;
//     for(let i=0;i<arr.length;i++){
//        if(arr[i]>max){
//         max=arr[i];
//        }
//     }
//     return max;

// }
// console.log(findMax(arr));


// const arr=[5,1,3,2,6];
// function findMax(arr){

// }
// console.log(findMax(arr));
//     const output =arr.reduce(function(max,curr){
//         if(curr>max){
//             max=curr;

//         }
//         return max;
//     },0);
//     console.log(output);



// const user=[
// {firstName:" akshay",lastName:"saini ",age:26},
// {firstName:"donald ",lastName:" trump",age:75},
// {firstName:"elon ",lastName:" musk",age:50},
// {firstName:" deepika",lastName:"padukone ",age:26},
// ];
// //list of full names
// const output2=user.map(x=>x.firstName+" "+x.lastName);
// console.log(output2);

const user=[
    {firstName:"satya",lastName:"kumar",age:34},
    {firstName:"mohan",lastName:"pandey",age:23},
    {firstName:"harshit",lastName:"shukla",age:21},
];
console.log(user);
const output=user.map(x=>x.firstName+" "+x.lastName);
console.log(output);










//{26:2,75:1,50:1}
// const output1=user.reduce(function(acc,curr){
// if(acc[curr.age]){
//     acc[curr.age]=++acc[curr.age];

// }
// else{
//     acc[curr.age]=1;
// }
// return acc;
// },{})
// console.log(output1);


// const output=user.filter((x)=>x.age<30)
// .map((x)=>x.firstName);

// console.log(output);