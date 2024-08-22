//Functions
/*
function addTwoNum(n1,n2){// here n1 n2 are parameters
console.log(n1+n2);
}
// the following method is not right for storing a function value into a variable. Its gives output as "undefined"
addTwoNum(3,4) // 3,4 are arguements
const result=addTwoNum(3,5)
console.log("result",result);
*/

// better way of doing this
/*function addTwoNum(n1,n2){
    let result=n1+n2
    return result // after return statement the code exits the funstion, so after return whatever code is there wont be executed
}
    */

// another way of writing the code
function addTwoNum(n1,n2){
    return n1+n2 
}
const result=addTwoNum(3,5)
console.log("result",result);
// now the output wont be undefined. So in JS we need to use return if we want to use the value from a funtion

//passing parameters
function loginUserMessage(username){
    return`${username} just logged in`
}

console.log(loginUserMessage("Arsh"))

// sometimes we dont know how many parameters can a user input. For ex. a shopping cart

function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(1,2,5,67,2,4,5,6,6,));
// we can pass as many arguements as we want, the function will create an Array for the arguements passed
