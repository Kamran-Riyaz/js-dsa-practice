let firstNumber = 10;
let secondNumber = 5;

console.log("Before Swap:");
console.log(`First Number: ${firstNumber}`);
console.log(`Second Number: ${secondNumber}`);

// Swapping using array destructuring (ES6)
[firstNumber, secondNumber] = [secondNumber, firstNumber];

console.log("After Swap:");
console.log(`First Number: ${firstNumber}`);
console.log(`Second Number: ${secondNumber}`);
