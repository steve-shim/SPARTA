// let obj = {
//   myVar: "foo",

//   myFunc: function () {
//     console.log(this.myVar);

//     setTimeout(function () {
//       console.log(this.myVar);
//     }, 1000);
//   },
// };
// obj.myFunc(); // foo ... then... undefined
// 콜백함수도 함수이기 때문에 setTimeout에서 전달받은 콜백함수를 함수 호출로서 실행하면
// 콜백함수 안의 this는 window를 가리키게 된다

// 이를 해결하기 위한 3가지 방법
// 1. this를 변수에 할당
// let obj = {
//   myVar: "foo",

//   myFunc: function () {
//     let self = this;
//     console.log(this.myVar);

//     setTimeout(function () {
//       console.log(self.myVar);
//     }, 1000);
//   },
// };
// obj.myFunc(); // foo ... then... foo

// 2. bind,call,apply를 활용
// let obj = {
//   myVar: "foo",

//   myFunc: function () {
//     console.log(this.myVar);

//     setTimeout(
//       function () {
//         console.log(this.myVar);
//       }.bind(this),
//       1000
//     );
//   },
// };
// obj.myFunc(); // foo ... then... foo

// 3. 화살표 함수 사용
// 화살표함수를 감싸고 있는 상위 스코프의 this를 따라간다
// 콜백함수 내부의 this문제를 화살표 함수를 쓰면 편리하게 해결 가능!
let obj = {
  myVar: "foo",
  test: this,
  myFunc: function () {
    console.log(this.myVar);

    setTimeout(() => {
      console.log(this.myVar);
    }, 1000);
  },
};
obj.myFunc(); // foo ... then... foo
console.log("obj.test", obj.test); // window
