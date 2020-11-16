// 조건문
const a = 1;

if (a + 1 === 2) {
  const a = 2;
  console.log('if문 안의 a 값은 ' + a);
};
console.log('if문 밖의 a 값은 ' + a);


if (a > 15) {
  console.log('a가 15보다 큽니다.');
} else {
  console.log('a가 15보다 크지 않습니다.');
};


if (a === 5) {
  console.log('5 입니다!');
} else if (a === 10) {
  console.log('10 입니다!');
} else {
  console.log('5도 아니고 10도 아니고, a는 ' + a + '입니다.' );
};


const device = 'iphone';
switch (device) {
  case 'iphone':
    console.log('아이폰!');
    break;
  case 'ipad':
    console.log('아이패드!');
    break;
  case 'galaxy':
    console.log('갤럭시!')
    break;
  default:
    console.log("안 해도 될 일이라면 하지 않는다. 해야 하는 일은 간략하게");
    break
}