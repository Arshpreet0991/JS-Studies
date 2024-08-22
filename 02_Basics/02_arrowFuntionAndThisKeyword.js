// Arrow Functions

/*
const user={
    username:"Arshpreet",
    score:99,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`); // this refers to the variable of current context  
    }
}

user.welcomeMessage()
user.username="Mandy"
user.welcomeMessage()

console.log(this);

// this is only used in objects

// Arrow function
const addTwo=(num1,num2)=>{
return num1+num2
}

console.log(addTwo(3,4)); */

// Implicit return of Arrow function
const addTwo=(num1,num2)=>(num1+num2) // in this type of funtion we dont need to use {} and return statement
console.log(addTwo(3,5));

// returning an object
const add=(obj)=>({name:"arsh"})