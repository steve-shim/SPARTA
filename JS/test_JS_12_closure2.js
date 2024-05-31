// [클로저]
// 중첩함수가 외부함수보다 더 오래 유지되는 경우,
// 중첩함수는 생명주기가 종료된 외부 함수의 변수를
// "여전히" 참조할 수 있다

//[TEST 1]
let x = 1;
function outer() {
  let x = 10;
  const inner = function () {
    console.log(++x); // outer 내부의 x=10을 ref 한다
  };
  return inner;
}

// [TEST 2]
// let x = 1;
// function outer() {
//   let x = 10;
//   const inner = innertest; // outer 안에서 정의가 된게 아니기 때문에 전역객체 x=1을 ref 한다
//   return inner;
// }
// function innertest() {
//   console.log(++x); // 1
// }

// 함수 innerFunc와 innerFunc2는 각각 다른 outer호출에 의해 만들어졌기 때문에
// 두 함수는 독립적인 렉시컬 환경을 갖게 되므로
// 각 함수는 자신만의 x를 갖게된다

// outer 함수를 '실행'해서, innerFunc에 담는다는건
// outer 함수의 return부분을 innerFunc에 담는다는 얘기...
const innerFunc = outer();
// --- outer 컨텍스트가 종료되어도
// --- 여전히 innerFunc는 outer 컨텍스트의 x를 참조하고 있다
//            TEST1 TEST2
innerFunc(); // 11    2
innerFunc(); // 12    3
innerFunc(); // 13    4

const innerFunc2 = outer();
innerFunc2(); // 11   5
innerFunc2(); // 12   6
innerFunc(); // 14    7

// const increasess = (function outer() {
//   let x = 10;
//   const inner = function () {
//     console.log(++x);
//   };
//   return inner;
// })();

// increasess(); // 11
// increasess(); // 12
// increasess(); // 13

var increasexx = (function outer(start, end) {
  const inner = function () {
    console.log(start, end);
  };
  return inner;
})(0.3, 9.7);
increasexx(); // 11

var increasexx = (function outer(start, end) {
  const inner = function () {
    console.log(start, end);
  };
  return inner;
})(30.3, 93.7);
increasexx(); // 12

var increasexx = (function outer(start, end) {
  const inner = function () {
    console.log(start, end);
  };
  return inner;
})(330.3, 339.7);
increasexx(); // 13
