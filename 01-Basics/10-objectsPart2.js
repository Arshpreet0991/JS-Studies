// ways to declaring object
//2) constructor or singleton

const tinderUser=new Object()

tinderUser.id="123abc"
tinderUser.name="sam"
tinderUser.isLoggedIn=false

//console.log(tinderUser);

// in the below case we are declaring objects into objects.
const regularUser={
    email:"abc@gmail.com",
    fullname:{
        userFullName:{
            firstname:"Arsh",
            lastname:"singh"

        }
    }
}
// to access this type of object we do it like this
//console.log(regularUser.fullname.userFullName.firstname);

// combining objects, same as array
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj3=Object.assign({},obj1,obj2)// it returns a modified target object
//console.log(obj3);

// preferred way of combining, by using spread operator
const obj4={...obj1,...obj2}
console.log(obj4);




