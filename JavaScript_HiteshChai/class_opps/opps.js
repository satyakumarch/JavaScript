const user={
    username:"satyakumar",
    logincredentials:8,
    signIn:"true",

    getuserdetails:function(){
        // console.log("user details are",this.username,this.logincredentials,this.signIn);
        console.log(this);
    }
}
// console.log(user.username);
// console.log(user);

//costructor function

class User {
    constructor(username, logincredentials, signIn) {
        this.username = username;
        this.logincredentials = logincredentials;
        this.signIn = signIn;
        this.greeting=function(){
            console.log(`welcome,${this.username}`);
        }

        return this;


    }
}
// console.log(new User("satyakumar",8,true));
const user1=new User("satyakumar",8,true);
console.log(user1);
const user2=new User("predeep",10,false);
console.log(user2);
