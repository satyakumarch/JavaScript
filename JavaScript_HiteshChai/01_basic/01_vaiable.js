const accountId = 1234567890;
let accountname="satya kumar";
var accountgmail="satyakumar@gmail.com";
accountcity="Nepal";
let accountaddress;

/*
var is not used because of 
issue on the block scope and functon scope 

*/

// accountId=34231243;// cannot change the account id because of const 
console.log(accountId);
console.table([accountId,accountname,accountgmail,accountcity,accountaddress]);