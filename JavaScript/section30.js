// 조건문 스마트하게 쓰기
function isAnimal(text) {
  const animals = ["고양이", "개", "거북이", "너구리"];
  return animals.includes(text);
}
// same
// const isAnimal = (text) => ["고양이", "개", "거북이", "너구리"].includes(text);

console.log(isAnimal("개"));
console.log(isAnimal("노트북"));



function getSound(animal) {
  if (animal === '개') return '멍멍!';
  if (animal === "고양이") return "야옹~";
  if (animal === "참새") return "짹짹";
  if (animal === "비둘기") return "구구 구 구";
  return '...?'
}
// same
// function getSound(animal) {
//   const sunds = {
//     개: '멍멍!',
//     고양이: '야옹~',
//     참새: '짹짹',
//     비둘기: '구구 구 구'
//   };
//   return sounds[animal] || '...?';
// }
// same
// function makeSound(animal) {
//   const tasks = {
//     개: () => { console.log('멍멍!'); },
//     고양이() { console.log('야옹~'); },
//     참새() {console.log('짹짹')},
//     비둘기() {console.log('구구 구 구')}
//   }
//   const task = tasks[animal];
//   if (!task) {
//     console.log('...?');
//     return;
//   }
//   task();
// }
// makeSound('개')
console.log(getSound('개'));
console.log(getSound('비둘기'));
console.log(getSound('사람'));