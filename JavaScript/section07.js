function add1(a, b) {
  return a + b;
}
const sum1 = add1(1, 2);
console.log(sum1);

// 화살표 함수
const add2 = (a, b) => a + b;
console.log(add2(3, 4));




function hello1(name1) {
  return `Hello ${name1}!`;
}
const result1 = hello1('Lucy Ter');
console.log(result1);

// 화살표 함수
const hello2 = (name2) => {
  return `Hello ${name2}!`;
}
console.log(hello2('Lucy Ter'));




function getGrade(score) {
  if (score === 100) {
    return 'A+';
  } else if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else { return 'F'; };
}
const grade = getGrade(86);
console.log(grade);


