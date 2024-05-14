var obj = {
  vals: [1, 2, 3],
  logValues: function (v, i) {
    console.log(">>> test start");
    if (this === global) {
      console.log("this가 global이다 원하지 않는 결과");
    } else {
      console.log(this, v, i);
    }
    console.log(">>> test end");
  },
};

//method로써 호출
//logValues 의 호출주체가 obj로 명확하기 때문에 logValues안의 this는 obj가 된다
obj.logValues(1, 2);

//메서드를 전달한 것 처럼 보여도 그냥 function을 전달 한거다
//callback => obj를 this로 하는 메서드를 그대로 전달한게 아니에요
//단지, obj.logValues가 가리키는 함수만 전달한거에요(obj 객체와는 연관이 없습니다)
[4, 5, 6].forEach(obj.logValues);
