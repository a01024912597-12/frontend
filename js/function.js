// 함수
function add(a, b) {
  return a + b;
}

// 함수 실행

let result = add(1, 2);
console.log(result);
// NaN(Not a Number)
console.log(add());
console.log(add(3));

// 익명함수
const myFunc = function (a, b) {
  return a + b;
};
console.log(myFunc(3, 4));

// name() 내부용
const myFunc2 = function (a, b) {
  return a + b;
};

// console.log(name(3,4)); ReferenceError
console.log(myFunc2(3, 4));

// 함수 안에 함수가 들어갈 수 있음
function a() {
  function b() {
    console.log("b");
  }
  if (true) {
    function c() {}
  }
  b();
  c();
}

// b();
a();

// ------------------------------------
// 호이스팅(hoisting) : 끌어올려서 실행
// funtion 함수 가능
// 익명함수는 불가능
// ------------------------------------
console.log(multiply(4, 6));
function multiply(x, y) {
  return x * y;
}

// console.log(myFunc3(12, 6));
const myFunc3 = function (x, y) {
  return x - y;
};

// 매개변수 초기화
function test(a, b = 52, c = 273, d) {
  d = d || 65;

  console.log(`a = ${a}, b = ${b}, c = ${c}, d = ${d}`);
}
test(12, 13);
// async function name(params) {

// }

// async (params) => {

// }
