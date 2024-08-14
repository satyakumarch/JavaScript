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


const arr=[5,1,3,2,6];
//sum and max
function findMax(arr){
    let max=0;
    for(let i=0;i<arr.length;i++){
       if(arr[i]>max){
        max=arr[i];
       }
    }
    return max;

}
console.log(findMax(arr));
