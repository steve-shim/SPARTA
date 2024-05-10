var obj1 = {
  outer: function () {
    console.log(this); // (1) outer

    // AS-IS
    var innerFunc1 = function () {
      console.log(this); // (2) 전역객체
    };
    innerFunc1();

    // TO-BE
    var self = this;
    var innerFunc2 = function () {
      console.log(self); // (3) outer
    };
    innerFunc2();
  },
};

// 메서드 호출 부분
obj1.outer();

// this는 obj1 스코프 안에 있으니까 그걸 변수에 저장하고
// 해당 변수를 함수 내에서 출력하면 원하는 값이 유지된다
