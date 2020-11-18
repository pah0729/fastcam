const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

for (i = 0; i < superheroes.length; i++) {
  console.log(superheroes[i])
}
// same
superheroes.forEach(function (hero) {
  console.log(hero);
})
// superheroes.forEach(hero => {
//   console.log(hero);
// }); 화살표 함수


const array = [1, 2, 3, 4, 5, 6, 7, 8];
// 제곱
const squared = [];
for (let i = 0; i < array.length; i++) {
  squared.push(array[i] * array[i]);
}
array.forEach(n => {
  squared.push(n * n);
})
console.log(squared); // for vs forEach


// map
const squared2 = array.map(nn => nn * nn);
console.log(squared2)

const items = [
  { id: 1, text: 'hello' },
  { id: 2, text: 'bye' }
];
const texts = items.map(item => item.text);
console.log(texts);