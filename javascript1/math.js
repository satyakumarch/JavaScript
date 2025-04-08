//properties
//Math.PI
//MathObject.entries()

// console.log(Math.abs(12));
// console.log(Math.pow(12,2));
// console.log(Math.floor(5.5));
// console.log(Math.floor(5.5555555555555));
// console.log(Math.floor(-5.5));
// console.log(Math.ceil(5.5));
// console.log(Math.ceil(-5));

// let num1=Math.random();
// let num2=num1*10;
// let num=Math.floor(num2);
// console.log(num);

//console.log(Math.floor(Math.random()*10)+1);


//Generate a random number between 1 and 100
//console.log(Math.floor(Math.random()*100)+1);


//Guessing game
//User enter a max number & then tries to guess a random generated number between 1 to max; 

const  max=prompt("Enter the max number:");
console.log(max);

const random =Math.floor(Math.random()*max)+1;
let guess=prompt("guess the number:");

while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess==random){
        console.log("you are right! congrate");
        break;
    }else if(guess<random){
       guess=prompt("your guess was too small.Please try again")
    }
    else{
        guess=prompt("your guess was to large .Please try again ")
    }
}


