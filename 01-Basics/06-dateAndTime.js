//dates

let myDate=new Date()// create an instance of object
console.log(myDate); // it doesnt give us properly formatted date so we can read them

// different ways to present date
/*console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toString()); */

let myCreatedDate=new Date(2025,0,23);
console.log(myCreatedDate.toDateString());

let myTimeStamp= new Date.now()
console.log(myTimeStamp);// gives time in miliseconds






