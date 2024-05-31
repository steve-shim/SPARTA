let random = (function () {
  let value = Math.random();
  console.log("value", value);
  return function () {
    return (value += 1);
  };
})();

// 외부함수가 호출 되었을 때의 정보를
// 내부함수는 outer로서 참조하고 있다
let arr = [random(), random(), random()];
console.log("arr", arr);
// [ 1.6458537145061112, 2.6458537145061112, 3.6458537145061112 ]

let ff = function () {
  let value = Math.random();
  console.log("value", value);
  return function () {
    return (value += 1);
  };
};

// 배열 안의 세 함수는 각각 ff()를 호출할 때 생성된
// 렉시컬 환경과 연관 관계를 맺습니다.
let arr2 = [ff()(), ff()(), ff()()];
console.log("arr2", arr2);
// [ 1.28731598893277477, 1.8058711451426821, 1.9912084911476102 ]

// 외부함수가 호출되는 순간 = 생성자 함수가 호출되는 순간
// 내부함수(내부에서 정의가 되어있어야함)는 그 순간의 외부함수 정보를 저장하고 = 그 순간의 외부 렉시컬 환경 저장
// 참조 할 수 있게된다
