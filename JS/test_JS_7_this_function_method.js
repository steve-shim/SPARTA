var obj1 = {
  outer: function () {
    console.log("TEST => ", this); // (1)
    var innerFunc = function () {
      console.log("TEST => ", this); // (2), (3)
    };
    innerFunc();

    var obj2 = {
      innerMethod: innerFunc,
    };
    obj2.innerMethod();
  },
};
obj1.outer();

// (1) : obj1, (2) : 전역객체, (3) : obj2
// 함수로서의 호출은 함수가 메서드 내부에 있더라도 예외없이 this는 전역객체다

var obj = {
  outer: function () {
    console.log(this); // (1) obj
    var innerFunc = () => {
      console.log(this); // (2) obj
    };
    innerFunc();
  },
};

obj.outer();
