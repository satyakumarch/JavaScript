// const http=require('http');
// const PORT=3022;
// const HOSTNAME='localhost'
// const server=http.createServer((req,res)=>{
//     res.statusCode=200
//     res.setHeader('Content-Type','application/json');
// res.end('Node server created by satya kumar');
// });
// server.listen(PORT,()=>{
//     console.log(`server running at ${HOSTNAME}:${PORT}`);
// })


// var http=require('http');
// http.createServer(function(req,res){
//     res.write('hello woorld');
//     res.end();
// }).listen(4000);
// console.log('server running at 40000')


const  user={
    username:"satya",
    email:"satya@gamil.com"

}
const{username,email}=user

const myarray=[
    {
        username:"shyam",
        email:"shyam@gmail.com"
    },
    {
        username:"shivam",
        email:"shivam@gmail.com"
    },
    {
        user:"Pashupati",
        email:"pashupati@gmail.com"
    }
]
myarray.map((ele)=>{
    console.log(ele.username)

})