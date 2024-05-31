// let num = 0;

// // 카운트 상태 변경 함수 #1
// const increase = function () {
//   // 카운트 상태를 1만큼 증가시킨다.
//   return ++num;
// };

// console.log(increase());
// num = 100; // 치명적인 단점이 있어요. (num이 은닉되지 않아서 외부에서 변경 가능하다)
// console.log(increase());
// console.log(increase());

// 카운트 상태 변경 함수 #2
// const increase = function () {
//   // 카운트 상태 변수
//   let num = 0;

//   // 카운트 상태를 1만큼 증가시킨다.
//   return ++num;
// };

// num 변수를 지역변수로 넣어서 외부 변경은 방지했다
// num 변수는 오직 increase함수만으로 접근가능한데 increase함수를 호출할떄마다 초기화 되는 문제점
// 이전 상태값을 유지 못함
// console.log(increase()); //1
// console.log(increase()); //1
// console.log(increase()); //1

// // 카운트 상태 변경 함수 #3
// const increase = (function () {
//   // 카운트 상태 변수
//   let num = 0;

//   // 클로저
//   return function () {
//     return ++num;
//   };
// })();

// // 이전 상태값을 유지
// console.log(increase()); //1
// console.log(increase()); //2
// console.log(increase()); //3

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

// 카운트 상태 변경 함수 #4
const increasestr = (function () {
  // 카운트 상태 변수
  let numstr = "";
  // 클로저
  return function () {
    //console.log("numstr", numstr);
    return (numstr += "ha");
  };
})();

// 이전 상태값을 유지
console.log(increasestr()); // ha
console.log(increasestr()); // haha
console.log(increasestr()); // hahaha
