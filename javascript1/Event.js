// // let btn=document.querySelector("button");
// // console.dir(btn);

// // btn.onclick=function(){
// //     console.log("buttonwas clicked");
// // };


// let btns=document.querySelectorAll("button");
// for(btn of btns){
// //     btn.onclick=sayhello;
// //     btn.onmouseenter=function(){
// //         console.log("you entered a button");

// //     };
// //     console.log(btn);
// // }

// btn.addEventListener("click",sayhello);
// btn.addEventListener("click",sayName);
// }
// function sayhello(){
//     alert("hello");
// }
// function sayhello(){
//     alert("jai sri ram");
// }

//-----------------------------------------------------//

let btn=document.querySelector("button");


btn.addEventListener("click",function(){
    let h3=document.querySelector("h3");
    let randomColor=getRandomColor();
    h3.innerText=randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor=randomColor;

       console.log("color updated");
});


function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);

    let blue=Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`;
    return color;

}