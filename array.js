// let marks=[41,52,34,54,45,76,96,57,false,"Not present"]
// console.log("The length of the array is:",marks.length)
// console.log(marks)
// console.log(marks[0])
// console.log(marks[1])
// console.log(marks[2])
// console.log(marks[4])
// console.log(marks[11])//undefined
// marks[3]=45
// marks[4]=55
// console.log(marks)
// console.log(typeof marks)




//methods of array
// let num=[1,2,3,34,4]
// let b=num.toString()
// console.log(b,typeof b)


//join method
// let c=num.join("__")
// console.log(c,typeof c)

//pop method
// let r=num.pop()
// console.log(num,r)
// output
// [1, 2, 3, 34] 4


//push the element
// let r1=num.push(56)
// console.log(num,r)

// let r2=num.shift()
// console.log(r2,num)

// let r3=num.unshift()
// console.log(r3,num)


// let num=[1,2,3,4,5,6,7,8,9]
// let num2=[11,33,45,67,76,54,34]
// let num3=[342,343,645,234,4565,5646]

// console.log(num,"\n")
// console.log(num.length,"\n")
// let newarray=num.concat(num2,num3)
// console.log(num,newarray,"\n")


//sort order
// let num4=[342,343,645,234,4565,5646]
// num4.sort()
// console.log(num4)// [234, 342, 343, 4565, 5646, 645]



// //accending order
// let compare=(a,b)=>{
//     return a-b
// }
// let num3=[342,343,645,234,4565,5646]
// num3.sort(compare)
// console.log(num3)//[234, 342, 343, 645, 4565, 5646]
// num3.reverse()
// console.log(num3)//[5646, 4565, 645, 343, 342, 234]




// let num=[551,22,3,14,5,6,7,8,229]
// num.splice(2,3,1021,1022,1023,1024,1025)
// console.log(num)//(11) [551, 22, 1021, 1022, 1023, 1024, 1025, 6, 7, 8, 229]


// let names=["anurag","satya","shyam","shivam","shiva","gourav","vivek","binod","ankit"]
// console.log(names)
// console.log("The length of the array is:",names.length)
// console.log("The last index of the array is:",names[names.length-1])
// names[3]="shyam friend";
// console.log(names)


// let names=["satya","shyam","mohan","shivam","sohan"]

// names.push("ravi")
// console.log(names)


//     for(let i=0;i<names.length;i++)
//     {
//         if(names[i]=="satya"){
//             names[i]="satya kumar"
//         }    
//     }
//     console.log(names)
//     output
//     [ 'satya', 'shyam', 'mohan', 'shivam', 'sohan' ]
// [ 'satya kumar', 'shyam', 'mohan', 'shivam', 'sohan' ]




//let arr=[2,3,4]

// arr.forEach(function(element,index,arr){
//     console.log(index,element,arr)
// })
// output
// 0 2 [ 2, 3, 4 ]
// 1 3 [ 2, 3, 4 ]
// 2 4 [ 2, 3, 4 ]
// arr.forEach((element,index,arr)=>{
//     console.log("arrow",index,element,arr)

// })
// output
// arrow 0 2 [ 2, 3, 4 ]
// arrow 1 3 [ 2, 3, 4 ]
// arrow 2 4 [ 2, 3, 4 ]

// const heros=["naagraj","doga","dhruva","maniraj"]

// heros.forEach((element)=>{console.log(element.toUpperCase())})
// output
// NAAGRAJ
// DOGA
// DHRUVA
// MANIRAJ

// arr.map(function(element,index,arr){
//     console.log(element,index,arr,"\n")
// })
// heros.map((h)=>console.log(h.toUpperCase()))

//filter
// //something value you want to change
// console.log(heros,"\n");
// const herowithRaj=heros.filter((h)=>{
//      return h.endsWith('raj')
// })
// console.log(herowithRaj,"\n")

//shopping cart
// const cartbill=[20,30,40]
// const sumofbills=cartbill.reduce((prev,curr)=>prev+curr,0)
// console.log(sumofbills)

// const gamescore=[200,300,310,250,150,"satya"]
//check id the value are number
// console.log(typeof gamescore[1])
// const gamescorecheck=gamescore.every((v)=>typeof v === 'number')
// console.log("check",gamescorecheck)

//find score above 200
// const above200=gamescore.find((score)=> score> 200) 
// console.log(above200)
// output
// 300


//findindex
//some
//sort