 // Numbers
 const score=400;// JS automatically takes it as a number data type
 console.log(score);
 
// data type by declaring this is guaranteed
 const balance=new Number(300.262626);
 console.log(balance);

 // convert number to String
 console.log(balance.toString())
 console.log(typeof(balance.toString()));

 // To limit the decimal number
 console.log(balance.toFixed(2)); // only shows the two digits after decimal

 //add commas to read the number easily
 const hundreds=1000000000000
 console.log(hundreds.toLocaleString("en-IN"));
 
 //+++++++++ MATH LIBRARY ++++++++++++++++

 console.log(Math.abs(-4));// changes negative values to positive, ie. give absolute value as output

 console.log(Math.round(4.7));// round off numbers
 
 //get min and max value
 console.log(Math.min(5,6,8,9));
 console.log(Math.max(5,6,8,9));

 // Random
 console.log(Math.random()); // it always gives random values between 0 and 1 only. to get values greater than 1. we can multiply Math.random with multiples of 10. Example
 
 console.log(Math.random()*10+1);// plus +1 because random can generate 0, so to avoid that we use +1
 
 // to create random numbers between two ranges
 const min=10
 const max=20
 console.log(Math.floor(Math.random()*(max-min+1)+min));// we add minimum so that the number generated will always be greater than the required minimum range.
      
 
 
 
 
 