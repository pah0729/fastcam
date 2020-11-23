// 복습 & 총정리
// forEach = 아이언맨, 캡틴 아메리카, 토르, 닥터스트레인지
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
superheroes.forEach(hero => {
  console.log(hero);
});

// map = [1, 4, 9, 16, 25, 36, 49, 64]
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const square = n => n * n;
const squared = array.map(square);
console.log(squared);

// indexOf = 2
const index = superheroes.indexOf('토르');
console.log(index);

// findIndex = 2
const todos = [
  { id: 1, text: '자바스크립트 입문', done: true },
  { id: 2, text: '함수 배우기', done: true },
  { id: 3, text: '객체와 배열 배우기', done: true },
  { id: 4, text: '배열 내장함수 배우기', done: false }
];
const index2 = todos.findIndex(todo => todo.id === 3);
console.log(index2);

// filter = [ { id: 4, text: '배열 내장함수 배우기', done: false } ]
const tasksNotDone = todos.filter(todo => todo.done === false);
console.log(tasksNotDone);

// splice = [ 10, 20, 40, 50 ]
const numbers = [10, 20, 30, 40, 50];
const index3 = numbers.indexOf(30);
numbers.splice(index3, 1);
console.log(numbers); // 배열의 변화가 있음

// sliced = [ 10, 20 ] / [ 10, 20, 40, 50 ]
const sliced = numbers.slice(0, 2);
console.log(sliced);
console.log(numbers); // 배열의 변화가 없음

// shift = 10 / [ 20, 40, 50 ]
const value = numbers.shift();
console.log(value);
console.log(numbers); // 배열의 변화가 있음

// pop = 50 / [ 20, 40 ]
const value2 = numbers.pop();
console.log(value2);
console.log(numbers); // 배열의 변화가 있음

// unshift = [ 5, 20, 40 ]
numbers.unshift(5);
console.log(numbers);

// concat = [ 1, 2, 3, 4, 5, 6 ]
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);
console.log(concated);

// join = 1,2,3,4,5,6,7,8 / 1 2 3 4 5 6 7 8 / 1, 2, 3, 4, 5, 6, 7, 8
const array2 = [1, 2, 3, 4, 5];
console.log(array.join());
console.log(array.join(' '));
console.log(array.join(', '));

// reduce = 15
const array3 = [1, 2, 3, 4, 5];
let sum = array3.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum)

// Qz
// 숫자 배열이 주어졌을 때 10보다 큰 숫자의 갯수를 반환하는 함수를 만드세요.
function countBiggerThanTen(numbers2) {
  return numbers2.reduce((acc, current) => {
    if (current > 10) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
};
const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count);
  // 1 .return numbers.filter(n => n > 10).length;
  // 2. let count = 0;
  // numbers.forEach((n) => {
  //   if (n > 10) {
  //     count++;
  //   }
  // });
  // return count;
