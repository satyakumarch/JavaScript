const regularuser={
    email:"satya@gmail.com",
    name:{
        userFullname:{
            firstName:"satya",
            lastName:"kumar"

        }
    },

}
console.log(regularuser.name.userFullname.firstName);
console.log(regularuser.email);

const user1={1:'satya',2:"raj",3:"satyam"};
const user2=Object.assign({7:"mohan",5:"avinandan",4:"satyam"});
const user3={...user1,...user2};
console.log(user3);
console.log(user3[5]);  

const user=[
    {
        id:1,
        name:"satya",
        address:"patna"
    },
    {
        id:2,
        name:"raj",
        address:"delhi"
    },
    {
        id:3,
        name:"satyam",
        address:"mumbai"
    }
];
// console.log(user[0].name);
// console.log(user[1].address);  
// console.log(user[2].id);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));