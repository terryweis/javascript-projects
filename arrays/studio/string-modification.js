const input = require('readline-sync');
let str = "LaunchCode";

let number = input.question("How many letters should be moved?");


if (number > str.length){
    console.log(`You entered ${number} letters, but string only has ${str.length} letters! So 3 three letters have been moved`);
    number = 3;
}
//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let rearrangedstr = str.slice(number) + str.slice(0,number);


//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`The orginal word ${str} has now been changed to ${rearrangedstr}.`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

// This has been added on line 4 

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
