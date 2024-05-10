// 상위 컨텍스트의 this를 내부함수나 콜백 함수에 전달하기
// call를 이용 --> 내부에서 사용할 this를 넘겨주면서 함수 즉시실행
var obj = {
  outer: function () {
    console.log("[call 이용 this]", this); // obj
    var innerFunc = function () {
      console.log("[call 이용 this]", this);
    };

    // call을 이용해서 즉시실행하면서 this를 넘겨주었습니다
    innerFunc.call(this); // obj
  },
};
obj.outer();

// bind를 이용 --> 내부에서 사용할 this를 넘겨주면서 함수반환
var obj = {
  outer: function () {
    console.log("[bind 이용 this]", this);
    var innerFunc = function () {
      console.log("[bind 이용 this]", this);
    }.bind(this); // innerFunc에 this를 결합한 새로운 함수를 할당
    innerFunc();
  },
};
obj.outer();
