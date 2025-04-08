// let x = function(){
//     console.log("hi")
// }
// x();


//immmediately  invoked function
(function exec()
{
    console.log("named")
})();
(function(x)
{
    console.log(x*x)
}(5));