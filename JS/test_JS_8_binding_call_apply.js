// 명시적 this binding
// 자동으로 부여되는 상황별 this의 규칙을 깨고 this에 별도의 값을 저장
// call / apply / bind
// call, apply는 즉시실행함수

var func = function (a, b, c) {
  console.log(this, a, b, c);
};

// no binding
func(1, 2, 3); // Window{ ... } 1 2 3

// 명시적 binding
// func 안에 this에는 {x: 1}이 binding돼요
func.call({ x: 1 }, 4, 5, 6); // { x: 1 } 4 5 6

var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  },
};

// method는 obj에 의해서 호출이 되고 있기 때문에 호출의 주체가 명확
// 메서드 안에서의 this는 항상 obj를 가리킨다
obj.method(2, 3); // 1 2 3
// call -> 메서드 내의 this에 해당하는 객체를 적고 뒤에 나머지 인자 전달
obj.method.call({ a: 4 }, 5, 6); // 4 5 6

// apply -> call과 똑같은데 나머지 매개변수를 리스트에 담아서 전달
var func = function (a, b, c) {
  console.log(this, a, b, c);
};
func.apply({ x: 1 }, [4, 5, 6]); // { x: 1 } 4 5 6

var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  },
};

obj.method.apply({ a: 4 }, [5, 6]); // 4 5 6

// 유사배열
var obj = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};

// 객체 -> 배열
var arr = Array.from(obj);

// 찍어보면 배열이 출력됩니다.
console.log(arr);
