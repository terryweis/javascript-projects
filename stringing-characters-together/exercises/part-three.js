//Part Three section one

let word = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'

console.log(word.slice(0,1) + word.slice(4,5));

//2. Without using slice(), use method chaining to accomplish the same thing.

let initial = word[0] + word[4];
console.log(initial);

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."

console.log(`The abbreviation for ${word} is ${initial}.`)

//4. Just for fun, try chaining 3 or more methods together, and then print the result.

console.log(`I enjoy drinking a cup of ${word.slice(word.indexOf("Java"),word.indexOf('Java')+4)} while reading my manu${word.slice(4,10)}`);

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
let tC = 'title case';
tC = tC.replace("t","T") 
tC = tC.replace("c","C");
console.log(tC);