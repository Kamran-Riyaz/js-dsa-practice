const number1 = 2;
const number2 = 5;
const number3 = 10;

if (number1 > number2 && number1 > number3) {
  console.log(`${number1} is greater.`);
} else if (number2 > number1 && number2 > number3) {
  console.log(`${number2} is greater.`);
} else {
  console.log(`${number3} is greater.`);
}
