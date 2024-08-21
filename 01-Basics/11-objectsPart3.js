//destructuring of objects

// destructur an object is an important concept, as when we recive data in form of arrays from database or react, we de-structure the object to make it easier to understand.

const tekkenKeyMove={
    charactername:"dragunov",
    russianAssault:"fff2",
    heatSmash:"2+3"
}

// deconstructing object
const {russianAssault}=tekkenKeyMove // declare a variable then use the objec key inside {} and assigns to object name.
console.log(russianAssault);// after deconstructing, the code looks much cleaner as i dont have to write tekkenkeymoves.movename again and again

//we can also give the key, our own name. for ex.
const{russianAssault:running2}=tekkenKeyMove
console.log(running2);

 


