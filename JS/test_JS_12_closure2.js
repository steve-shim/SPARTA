// [클로저]
// 중첩함수가 외부함수보다 더 오래 유지되는 경우,
// 중첩함수는 생명주기가 종료된 외부 함수의 변수를
// 여전히 참조할 수 있다

const x = 1;

function outer() {
  let x = 10;
  const inner = function () {
    console.log(++x);
  };
  return inner;
}

const innerFunc = outer();
// --- outer 컨텍스트가 종료되어도
// --- 여전히 innerFunc는 outer 컨텍스트의 x를 참조하고 있다
innerFunc();
innerFunc();
innerFunc();

const innerFunc2 = outer();
innerFunc2();
innerFunc2();
