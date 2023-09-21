// create an array variable containing the names

let names = "Terry, Ander, Tipsy, Parker, Katara";
let arrayNames = [];
arrayNames = names.split(", ");

// write a for loop that prints each name on a different line

for (let i = 0; i < arrayNames.length; i++){
console.log(arrayNames[i]);
}