// 1. 두 개의 숫자를 받아서 더한 결과를 반환하는 함수 작성 sum
function sum(x, y) {
  return x + y;
}
result = sum(1, 2);
console.log(result);

// 2. 함수 안에서 1~10까지 더한 결과를 출력하는 함수 작성

let hap = 0;
for (i = 1; i < 11; i++) {
  hap += i;
}
console.log(hap);

// 3. multiple(num) 정의 - num이 3의 배수라면 "박수"출력 / "통과"

function multiple(num) {
  if (num % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
}
multiple(4);

// 4. multiple2(num) - 3의 배수인 경우 "박수" 출력 / 9의 배수"박수*2" / 통과
function multiple2(num) {
  if (num % 3 == 0) {
    if (num % 9 == 0) {
      console.log("박수박수");
    } else {
      console.log("박수");
    }
  } else {
    console.log("통과");
  }
}
multiple2(9);

// 5. pass(outline, law) - 두과목 합해서 120점 이상이면 합격
// 단, 한 과목이라도 40점 미만이면 과락으로 불합격
function pass(outline, law) {
  if (outline + law >= 120 && (outline >= 40 || law >= 40)) {
    console.log("합격");
  } else {
    console.log("불합격");
  }
}
pass(40, 80);
