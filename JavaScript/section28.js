// 알고 있으면 유용한
// 삼항연산자
const array = [];
let text = array.length === 0 ? '배열이 비어있습니다.' : '배열이 비어있지 않습니다.';
console.log(text);


// Truthy and Falsy
function print(person) {
  if (!person) {
    return;
  }
  console.log(person.name);
}
const person = {
  name: 'John'
};
print(person)


// 단축 평가 논리 계산법
// ex. 1
const dog = {
  name: '멍멍이'
};

function getName(animal) {
  return animal && animal.name;
}

const name = getName(dog);
console.log(name);

// ex. 2
const object = null;
const name = object && object.name;

// ex. 3
const namelessDog = {
  name: '',
};

function getName(animal) {
  const name = animal && animal.name;

  if (!name) {
    return '이름이 없는 동물입니다.';
  }
  return name;
}

const name = getName(namelessDog);
console.log(name);