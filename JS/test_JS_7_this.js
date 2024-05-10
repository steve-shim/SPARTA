// // CASE1 : 함수 의 실행 주체는 전역 객체
// // 호출 주체를 명시할 수 없기 때문에 this는 전역 객체를 의미해요.
// var func = function (x) {
//   console.log(this, x);
// };
// func(1); // Window { ... } 1

// // CASE2 : 메서드 의 실행 주체는 obj (호출의 주체를 아는법: . or [])
// // 호출 주체를 명시할 수 있기 때문에 this는 해당 객체(obj)를 의미해요.
// // obj는 곧 { method: f }를 의미하죠?
// var obj = {
//   method: func,
// };
// obj.method(2); // { method: f } 2

var obj = {
  methodA: function () {
    console.log(this);
  },
  inner: {
    methodB: function () {
      console.log(this);
    },
  },
};

obj.methodA(); // this === obj
obj["methodA"](); // this === obj

obj.inner.methodB(); // this === obj.inner
obj.inner["methodB"](); // this === obj.inner
obj["inner"].methodB(); // this === obj.inner
obj["inner"]["methodB"](); // this === obj.inner
