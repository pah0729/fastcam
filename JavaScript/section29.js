// 함수의 기본 파라미터(기본값지정 하는 법)
function calculateCircleArea(r = 1) {
  return Math.PI * r * r;
}
// same
// const calculateCircleArea = (r = 1) => Math.PI * r * r;

const area = calculateCircleArea();
console.log(area)