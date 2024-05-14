// 화살표함수는 화살표 함수를 감싸고 있는 스코프에서 가져온다 (main함수)
// main 함수 안에서의 this는 object2 객체이다
// 일반함수인 main 함수를 호출한 객체는 object2 이기 때문이다
// 화살표함수는 정의된 위치에 의해 this가 결정이 나고
// 일반함수는 정의된 위치와 관계 없이 호출된 객체에 의해 결정이 된다
const object2 = {
  name: "별코딩",
  main: function () {
    console.log("main this", this); // { name: '별코딩', main: [Function: main] }
    const innerFunction = () => {
      console.log("main arrow this", this); // { name: '별코딩', main: [Function: main] }
    };
    innerFunction();
  },
};

object2.main();

// 일반함수 내의 this는 함수를 호출한 객체인데
// innerFunction을 호출한 객체는 window다
const object = {
  name: "별코딩",
  main: function () {
    const innerFunction = function () {
      console.log(this); // global or window
    };
    innerFunction();
  },
};

object.main();

// 일반함수 내의 this는 함수를 호출한 객체인데
// innerFunction을 호출한 객체는 window다
// bind를 활용하면 함수가 어떻게 호출이되건 상관없이 일반함수 내의 this를 고정할 수 있다
const object3 = {
  name: "별코딩",
  main: function () {
    const innerFunction = function () {
      console.log(this); // { hi: 'hi' }
    }.bind({ hi: "hi" });
    innerFunction();
  },
};

object3.main();
