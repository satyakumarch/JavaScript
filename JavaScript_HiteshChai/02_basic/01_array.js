const fruit=[];
fruit.push("apple");
fruit.push("banana");
fruit.push("mango")
// console.log(fruit);//[ 'apple', 'banana', 'mango' ]
// fruit.pop();
// console.log(fruit);//[ 'apple', 'banana' ]
// fruit.unshift("orange");
// console.log(fruit);//[ 'orange', 'apple', 'banana' ]
// fruit.shift();
// console.log(fruit);//[ 'apple', 'banana' ]
fruit.splice(0,1, "kiwi", "grape");//[ 'kiwi', 'grape', 'banana', 'mango' ]
// console.log(fruit);
fruit.splice(1, 1);//[ 'apple', 'grape', 'banana' ]
// console.log(fruit);
fruit.splice(1, 2);//[ 'apple' ]
// console.log(fruit);
fruit.splice(0, 1, "watermelon", "peach");
console.log(fruit);//[ 'watermelon', 'peach' ]
fruit.splice(0, 0, "pear", "plum");
console.log(fruit);//[ 'pear', 'plum', 'watermelon', 'peach' ]

