// Array
const myArr=[10,20,30,40,50]
// JavaScript arrays are resizable.
// Arrays elements can be of mixed datatype

// different ways to declare arrays
//const myHeros=["batman","superman","wonderwoman"]

//const myArr2= new Array(1,3,5,7,3,"Ash");

//console.log(myArr2);

// Array Method
//myArr.push(6); // adds and element on last array index

//myArr.push(70)
//console.log(myArr);

//myArr.pop();// remove last element of array
//console.log(myArr);

// true or false questions that can be checked on array
//console.log(myArr.includes(50));// it gives true or false only.
//console.log(myArr.indexOf(30));

//const newArr=myArr.join()// displays the array elements in string and displays without [] brackets.
//console.log(myArr);
//console.log(newArr);

// Slice method
console.log("A ", myArr);
const myn1=myArr.slice(1,3)// return a copy of a section of array
console.log(myn1);
console.log("B", myArr);

// Splice
//console.log("C ", myArr);
const myn2=myArr.splice(1,3)// return a copy of a section of array and changes the original array, basically removes the element from the array
console.log(myn2);
console.log("C", myArr);



