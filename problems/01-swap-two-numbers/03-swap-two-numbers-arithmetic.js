let firstNumber = 10;
let secondNumber = 5;

console.log("Before Swap:");
console.log(`First Number: ${firstNumber}`);
console.log(`Second Number: ${secondNumber}`);

// Swapping using arithmetic operations
firstNumber = firstNumber + secondNumber; // 10 + 5 = 15
secondNumber = firstNumber - secondNumber; // 15 - 5 = 10
firstNumber = firstNumber - secondNumber; // 15 - 10 = 5

console.log("After Swap:");
console.log(`First Number: ${firstNumber}`);
console.log(`Second Number: ${secondNumber}`);
