//console.log(a+b);
// a and b are not defined, so JS will give an error during runtime and will exit the code
//console.log("this line is never reached");

try{
    console.log(a+b);
    }
    catch(err){
        //console.log(err);// it outputs the error object
        console.log("there was an error");
        console.log("the error was saved in the error log");       
    }
    console.log("my program does not stop");
    
