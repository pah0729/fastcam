// 배열 내장 함수
const numbers = [10, 20, 30, 40, 50, 60, 70];

const sliced = numbers.slice(0, 2);
console.log(sliced);
console.log(numbers);

const index = numbers.indexOf(30);
numbers.splice(index, 2);
console.log(numbers);

const value = numbers.shift();
console.log(value);
console.log(numbers);

const value2 = numbers.pop();
console.log(value2);
console.log(numbers);

numbers.unshift(5);
const value3 = numbers.shift()
console.log(numbers); // unshift <-> shift

numbers.push(70);
const value4 = numbers.pop();
console.log(value4);
console.log(numbers); // push <-> pop