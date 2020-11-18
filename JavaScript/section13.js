// 반복문
// for
for (let s = 0; s < 10; s++) {
  console.log(s)
}

const names = ['멍멍이', '야옹이', '멍뭉이']
for (let i = 0; i < names.length; i++){
  console.log(names[i])
}


// while
let ii = 0;
let isFun = false;
while (!isFun) {
  console.log(ii);
  ii++;
  if (ii === 30) {
    isFun = true;
  }
}