const name="arsh"
const repocount=50

console.log(name+repocount + "value");
// concatination using "+" or "," is not a good practice as it. The following is the modern practice to concatinate.
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

// there is another way of declaring String. It is by using String object. One benefit is that we get a lot of String methods that we can use. Also, the string is stored like array and the have indices like array. But they are not array, they are object.

const gameName= new String("Arshpreet");

console.log(gameName[0]);
console.log(gameName[2]);

//some Strings method examples

console.log(gameName.length);
console.log(gameName.toUpperCase());

// check the character at a particular index
console.log(gameName.charAt(2)); 
console.log(gameName.indexOf('t'));

//part of the strings
//Sub string
const newString=gameName.substring(2,6); 
console.log(newString);

// Splice
const newString2=gameName.slice(-5,7) 
console.log(newString2);
// just like substring, but if we give it negative value, it starts counting the index from the end of the string. so last letter of string is -1, and second last is -2 and so on...

// trim method
const newString3="     Arsh     "
console.log(newString3.trim()); 
// it removes the extra spaces from string

// Replace Method
const url="https://google.com/arshpreet%20Singh"
console.log(url.replace("%20","-")) // replace parts of string with new string

// Include Method
console.log(url.includes("arsh")); // returns true if the string has the arguments passed in that string




