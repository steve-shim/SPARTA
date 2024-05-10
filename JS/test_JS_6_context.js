function a(x) {
  console.log(x); // 1
  var x;
  console.log(x); // 1
  var x = 2;
  console.log(x); // 2
}
a(1);

aa();
// 함수 선언문은 호이스팅에 의해서 맨 위로 끌어 올려지는데
// 이는 상당한 위험성을 내포하고 있다.
// "함수표현식"으로 작성하면 작성한 함수 아래 범위만 영향을 미치기 떄문에
// 위에 덮어 써지는 현상을 예방할 수 있다.
function aa() {
  console.log(b); // [Function: b]
  var b = "bbb";
  console.log(b); // bbb
  function b() {}
  console.log(b); // bbb
}

// 아래 코드를 여러분이 직접 call stack을 그려가며 scope 관점에서 변수에 접근해보세요!
// 어려우신 분들은 강의를 한번 더 돌려보시기를 권장드려요 :)
var a = 1;
var outer = function () {
  var inner = function () {
    console.log(a); // undefined <- LE, inner 컨텍스트 내부에서 호이스팅
    var a = 3;
  };
  inner();
  console.log(a); // 1 <- outer에 저장된 전역 컨텍스트에서 값을 참조
};
outer();
console.log(a); // 1 <- LE에 저장된 전역 컨텍스트에서 값을 참조

// 각각의 실행 컨텍스트는 LE 안에 record와 outer를 가지고 있고,
// outer 안에는 그 실행 컨텍스트가 선언될 당시의 LE정보가 다 들어있으니
// scope chain에 의해 상위 컨텍스트의 record를 읽어올 수 있다
