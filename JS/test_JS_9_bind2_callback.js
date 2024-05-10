var obj = {
  logThis: function () {
    console.log("[callback this]", this);
  },
  logThisLater1: function () {
    // 0.5초를 기다렸다가 출력해요. 정상동작하지 않아요.
    // 콜백함수도 함수이기 때문에 this를 bind해주지 않아서 잃어버렸어요!(유실)
    setTimeout(this.logThis, 500);
  },
  logThisLater2: function () {
    // 1초를 기다렸다가 출력해요. 정상동작해요.
    // 콜백함수에 this를 bind 해주었기 때문이죠.
    setTimeout(this.logThis.bind(this), 1000);
  },
};

obj.logThisLater1();
obj.logThisLater2();
