// 비구조화 할당
const object = { a: 1 };
function print({ a, b = 2 }) {
  console.log(a);
  console.log(b);
}
print(object)
// same
// const { a, b = 2 } = object;
// console.log(a);
// console.log(b)

const animal = {
  name: "멍멍이",
  type: "개",
};
const { name: nickname } = animal;
console.log(nickname);


// 배열
const array = [1];
const [one, two = 2] = array;
console.log(one);
console.log(two);


const deepObject = {
  state: {
    information: {
      name: 'Lucy Ter',
      languages: ['korean', 'english', 'chinese']
    }
  },
  value: 5
}
const { name, languages } = deepObject.state.information;
const { value } = deepObject;
const extracted = { name, languages, value };
console.log(extracted);