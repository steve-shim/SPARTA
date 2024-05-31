function 함수() {
  return new Promise((resolve, reject) => {
    resolve("안녕");
  });
}

함수().then((n) => console.log(`[1] 함수() 프로미스 객체 반환: ${n}`)); // 안녕

// async로 변환한 코드는 굳이 new Promise()로 붙여서 쓸 필요가없다.
// async를 붙인 함수 자체가 Promise가 되기 때문이다. 즉, async 함수는 언제나 프로미스를 반환한다.
// async는 function 선언 앞에만 붙일 수 있다.
// 함수2를 콘솔창에 출력해보면 Promise가 반환되는 것을 볼수있다.
//따라서, 함수2() 뒤에는 .then을 붙일수가 있다.
async function 함수2() {
  return "잘가";
}

console.log("함수2()", 함수2()); //Promise {<fulfilled>: '잘가'}
함수2().then((n) =>
  console.log(`[2] 함수2() async함수는 언제나 프로미스 객체 return: ${n}`)
); //잘가

// 물론 async 안에 new Promise를 붙여도 상관없다.
async function 함수3() {
  return new Promise((resolve, reject) => {
    resolve("안녕하세요");
  });
}

함수3().then((n) =>
  console.log(`[3] 함수3() async함수 안에서 return new Promise: ${n}`)
); //안녕하세요

async function 더하기() {
  return 1 + 1;
}

더하기().then(function (결과) {
  console.log(`[4] async 함수의 return 값은 then으로 받을 수 있다: ${결과}`); //2
});

// await 키워드는 프로미스가 settled 상태(비동기 처리가 수행된 상태)가 될 때까지 대기하다가 settled 상태가 되면 프로미스가 resolve 한 처리 결과를 반환한다.
// await 키워드는 반드시 프로미스 앞에서 사용해야한다.
// async function zz() {
//   async function 더하기2() {
//     var 어려운연산 = new Promise((성공, 실패) => {
//       var 결과 = 10 + 10;
//       성공(결과);
//     });
//     var 결과 = await 어려운연산;
//     console.log("결과", 결과);
//     return "Finish";
//   }
//   let res = await 더하기2(); //2
//   더하기2().then((a) => {
//     console.log("a", a);
//   });
//   console.log("res", res);
// }
// zz();

// return new Promise를 하면 resolve()로 전달되는 인자를 직접 then에서 받을 수 있다
// new Promise의 반환값 = resolve에 전달되는 인자이기 때문이다
async function 더하기2() {
  var 어려운연산 = new Promise((성공, 실패) => {
    setTimeout(() => {
      var 결과 = 10 + 10;
      성공(결과);
    }, 2000);
  });
  var 결과 = await 어려운연산;
  console.log("결과", 결과); // 20
  return "Finish";
}
더하기2().then((a) => {
  console.log(`[5] async 더하기2 함수의 return 값을 then으로 받는다: ${a}`);
}); // Finish
