const accountId="1445"
var accountName="Yella"
let accountEmail="ap@google.com"
let accountState; // no value entered.
accountCity="delhi" // not preffered way of declaring a variable. It can be declared but should not b used.

//accountId="55669" // accountId is a const so it is now allowed to override it by assigning another value.

/*
prefer not to use var due to problem in funtional and block scope. Let is basically var with scope
*/

console.table([accountName,accountId,accountEmail,accountCity,accountState]); 
// console.table will print a table of all the variables mentioned. Less typing otherwise console.log had to be typed that many times as the number of variables.
