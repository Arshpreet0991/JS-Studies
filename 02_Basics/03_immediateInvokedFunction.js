// IIFE- Immediately Invoked Funtion Expressions
// sometimes we need a function that should be executed immediately, then we use IIFE. 
// for ex. we want to connect to a DB immediately, and dont want to risk any value of variables polluting from global scope(in function), we use IIFE and execute the funtion immediately. 

(function immediateFunction(){
    console.log("DB Connected..."); 
})();
// To use IIFE, we wrap the whole function in brackets followed by another set () and ";". here, Semi-colon is a must, otherwise JS wont know when does the context of the invoked function ends. It will give an error if we want to execute a second IIFE function.

// writing it as an arrow function
((name)=>{console.log(`${name} DB connected...`);})("Tekken 8");