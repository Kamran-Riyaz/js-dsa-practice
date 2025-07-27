const str = "Hello";

const reversedArray = [];

for (let i = str.length - 1; i >= 0; i--) {
  reversedArray.push(str[i]);
}

const reversedString = reversedArray.join("");

console.log(reversedString);
