function multipleBy5(num){
    return num*5;
}
multipleBy5.power=2;
console.log(multipleBy5(5)); // 10
console.log(multipleBy5.power); // 2
console.log(multipleBy5.prototype); // undefined, because the result of multipleBy5(5) is a number, not a function with a prototype