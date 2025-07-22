const number1 = 10;
const number2 = 3;
const number3 = 10;

const numbers = [number1, number2, number3];
const max = Math.max(...numbers);

// How many times number occurs
const occurrences = numbers.filter((num) => num === max);

if (occurrences.length > 1) {
  console.log(`There is a tie for the greatest number: ${max}`);
} else {
  return console.log(`${max} is the greatest.`);
}
