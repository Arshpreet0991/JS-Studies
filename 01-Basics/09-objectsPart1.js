// ways to declare objects
// 1) objects literals

const mySymbol=Symbol() // create a symbol to put into object
const JsUser={
name:"Arshpreet",
age: 33,
location:"Montreal",
email:"arshpreet@google.com",
isLoggedIn:false,
lastLoginDays:["Monday","Saturday"],
[mySymbol]:"key1" // this is how we declare symbol inside object. we have to use curly brackets, because object key names are all string. if we dont use [], it is not going to register as symbol. instead it will be a string.

}

//accessing object
console.log(JsUser);

//console.log(JsUser.email);
//console.log(JsUser[mySymbol]);
//console.log(JsUser["email"]);
// since the key values in objects is a string, like name, age, location all are strings, so we have to use "" in syntax.

// if we want to fix a value of a key in object so that it does not change. we use
//Object.freeze(JsUser)

// we can also add function to object
JsUser.greeting = function(){
    console.log("Hello JS User");  
}

JsUser.greeting2 = function(){
    console.log(`Hello JS User,${this.name}`);  
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2())
