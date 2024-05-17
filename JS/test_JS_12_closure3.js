// let num = 0;

// // 카운트 상태 변경 함수
// const increase = function () {
//   // 카운트 상태를 1만큼 증가시킨다.
//   return ++num;
// };

// console.log(increase());
// num = 100; // 치명적인 단점이 있어요. (num이 은닉되지 않아서 외부에서 변경 가능하다)
// console.log(increase());
// console.log(increase());

// 카운트 상태 변경 함수 #3
const increase = (function () {
  // 카운트 상태 변수
  let num = 0;

  // 클로저
  return function () {
    return ++num;
  };
})();

// 이전 상태값을 유지
console.log(increase()); //1
console.log(increase()); //2
console.log(increase()); //3
