// Write a function called 'divide' that takes two parameters: a numerator and a denominator.
function divide(numberator,denominator){
    if (denominator === 0){
        throw Error("Attempted to divide by 0");
    }
    return numberator/denominator;
}
// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:
