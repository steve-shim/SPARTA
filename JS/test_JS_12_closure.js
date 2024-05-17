// [CASE 1]
// const x = 1;

// function outerFunc() {
//   const x = 10;
//   // 함수가 선언된 렉시컬 환경!!
//   // = 함수가 선언될 당시의 외부 변수 등의 정보!!
//   function innerFunc() {
//     console.log("x", x); // 10
//   }
//   innerFunc();
// }

// outerFunc();

// [CASE 2]
// [렉시컬스코프의 정의]
// JS엔진은 함수를 어디서 ‘호출했는지’가 아니라 함수를 어디에 ‘정의했는지’에 따라 상위 스코프를 결정
// innerFunc()에서는 outerFunc()의 x에 접근할 수 없죠.
// Lexical Scope를 따르는 프로그래밍 언어이기 때문
const x = 1;
function outerFunc() {
  const x = 10;
  innerFunc(); // 1
}

function innerFunc() {
  console.log(x); // 1
}

outerFunc();
// innerFunc는 밖에 있는 애라서 outerFunc내부에서 실행을 했다고 해서
// innerFunc내에 있는 x가 outerFunc내부에 정의된 x=10을 바라보는게 아니다

// 외부 렉시컬 환경에 대한 참조 값 = 실행컨택스트에 존재하는 outer는
// 함수가 호출되는 시점이 아니라 함수의 정의가 평가되는 시점에 결정된다
