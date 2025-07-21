let firstNumber = 10;
let secondNumber = 5;

console.log("Before Swap:");
console.log(`First Number: ${firstNumber}`);
console.log(`Second Number: ${secondNumber}`);

// Swapping using temporary variable
const temp = firstNumber;
firstNumber = secondNumber;
secondNumber = temp;

console.log("After Swap:");
console.log(`First Number: ${firstNumber}`);
console.log(`Second Number: ${secondNumber}`);
