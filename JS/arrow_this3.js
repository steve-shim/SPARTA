// var myVar = "shim";
// let obj = {
//   myVar: "foo",

//   myFunc: function () {
//     console.log("this.myVar", this.myVar); // foo

//     setTimeout(function () {
//       console.log("this.myVar", this.myVar); // shim
//     }, 1000);
//   },
// };
// obj.myFunc(); // foo ... then... undefined
// 콜백함수도 함수이기 때문에 setTimeout에서 전달받은 콜백함수를 함수 호출로서 실행하면
// 콜백함수 안의 this는 window를 가리키게 된다

// 이를 해결하기 위한 3가지 방법
// 1. this를 변수에 할당
// var myVar = "shim";
// let obj = {
//   myVar: "foo",

//   myFunc: function () {
//     let self = this;
//     console.log("this.myVar", this.myVar); // foo

//     setTimeout(function () {
//       console.log("self.myVar", self.myVar); // foo
//     }, 1000);
//   },
// };
// obj.myFunc(); // foo ... then... foo

// 2. bind,call,apply를 활용
// var myVar = "shim";
// let obj = {
//   myVar: "foo",

//   myFunc: function () {
//     console.log(this.myVar);

//     setTimeout(
//       function () {
//         console.log(this.myVar); // 콜백에 일반함수를 넣어줘서 window가 출력될 것을
//       }.bind(this), // myFunc 내부의 this를 바인딩해서 this가 obj로 고정된다
//       1000
//     );
//   },
// };
// obj.myFunc(); // foo ... then... foo

// 3. 화살표 함수 사용
// 화살표함수를 감싸고 있는 상위 스코프의 this를 따라간다
// 콜백함수 내부의 this문제를 화살표 함수를 쓰면 편리하게 해결 가능!
var myVar = "shim";
let obj = {
  myVar: "foo!!",
  test: this,
  myFunc: function () {
    console.log("일반함수의 this는 호출한 객체", this);
    console.log(this.myVar); // foo!!

    setTimeout(() => {
      console.log(this.myVar); // foo!!
    }, 1000);
  },
};
obj.myFunc(); // foo ... then... foo
console.log("obj.test", obj.test); // window
