const user={
    username:"satyakumar",
    logincredentials:8,
    signIn:"true",

    getuserdetails:function(){
        console.log("user details are",this.username,this.logincredentials,this.signIn);
    }
}
console.log(user.username);
console.log(user);