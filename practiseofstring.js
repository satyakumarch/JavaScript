let str="har\" "
console.log(str.length)

// const sentence="The quickly brown fox jump over the lazy dog";
// const word='fox2';
// console.log(sentence.includes(word))
// console.log(`The word"${word}" ${sentence.includes(word)?`is`:`is not`} in the sentences`);




let str2="please give RS 10000"
let amount =str2.slice(15)//10000
console.log(amount)
console.log(typeof amount)//string

//no changable because of non mutable
let friend="depika"
friend[3]="r"
console.log(friend)