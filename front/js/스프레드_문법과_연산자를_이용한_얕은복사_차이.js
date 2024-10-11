const o = {
  x: {
    y: 1,
  },
  z: 2,
};

const c1 = { ...o };
const c2 = o;

console.log(`기본 세팅`);
console.log(`o ${JSON.stringify(o)}`);
console.log(`c1 ${JSON.stringify(c1)}`);
console.log(`c2 ${JSON.stringify(c2)}`);
console.log(`c1 === o ${c1 === o}`);
console.log(`c2 === o ${c2 === o}`);

console.log(`o(원본)의 y, z 의 값 변경`);
o.x.y = 8;
o.z = 9;
console.log(`o ${JSON.stringify(o)}`);
console.log(`c1 ${JSON.stringify(c1)}`);
console.log(`c2 ${JSON.stringify(c2)}`);

console.log(`c1 의 y, z 의 값 변경`);
c1.x.y = 10;
c1.z = 11;
console.log(`o ${JSON.stringify(o)}`);
console.log(`c1 ${JSON.stringify(c1)}`);
console.log(`c2 ${JSON.stringify(c2)}`);

console.log(`c3 스프레드 연산자를 사용하여 깊은 복사`);
const c3 = { ...o, x: { ...o.x } };
console.log(`o ${JSON.stringify(o)}`);
console.log(`c3 ${JSON.stringify(c3)}`);
console.log(`c3 === o ${c3 === o}`);

console.log(`o(원본)의 y, z 의 값 변경 (c3는 영향을 받지 않음)`);
o.x.y = 12;
o.z = 13;
console.log(`o ${JSON.stringify(o)}`);
console.log(`c3 ${JSON.stringify(c3)}`);
