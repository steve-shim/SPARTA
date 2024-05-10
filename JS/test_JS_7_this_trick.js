var obj = {
  outer: function () {
    console.log("[TEST this1]", this); // (1) obj
    var innerFunc = () => {
      console.log("[TEST this2]", this); // (2) obj
    };
    innerFunc();
  },
};

obj.outer();

// 화살표함수는 this binding 작업절차가 생략되어서
// 원래였으면 (2)에서 전역객체로 this가 재정의 되어야했을 것을
// 기존 this obj의 값을 화살표함수 내부에서 다 사용된다
