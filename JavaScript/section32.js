// spread, rest
// spread
const slime = {
  name: '슬라임'
};
const cuteSlime = {
  ...slime,
  attribute: 'cute'
};
const purpleCuteSlime = {
  ...cuteSlime,
  color: 'purple'
};
const greenCuteSlime = {
  ...purpleCuteSlime,
  color: 'green',
}
console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
console.log(greenCuteSlime);

const numbers = [1, 2, 3, 4, 5];
const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers);

// rest
const { color, ...rest } = purpleCuteSlime;
console.log(color);
console.log(rest);

function sum(...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(sum(...numbers));

function subtract(x, y) {
  return x - y;
}
const result = subtract(1, 2);
console.log(result)

// 나중에 퀴즈 풀어보기