const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const concated = arr1.concat(arr2);
console.log(arr1)
console.log(arr2)
console.log(concated);

const array = [1, 2, 3, 4, 5];
console.log(array.join());
console.log(array.join(' '));
console.log(array.join(', '));

const numbers = [1, 2, 3, 4, 5];

let sum = 0;
numbers.forEach(n => {
  sum += n;
});
console.log(sum);