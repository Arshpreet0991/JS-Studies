const marvelHeros=["iron man","captain america", "black widow"]
const dcHeros=["batman","superman","wonderwoman"]

//marvelHeros.push(dcHeros)
//console.log(marvelHeros);

const allHeros=marvelHeros.concat(dcHeros) // concat combine two Arrays and gives a new array, without modyfing the old arrays.
//console.log(allHeros)

const all_new_Heros=[...marvelHeros,...dcHeros]// same as concat, but prefferable method of combining

console.log(all_new_Heros);
