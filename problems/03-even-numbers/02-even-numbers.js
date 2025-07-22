const from = 1;
const to = 50;

for (let i = from % 2 === 0 ? from : from + 1; i <= to; i += 2 ) {
  console.log(i);
}