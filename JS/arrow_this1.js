// function 키워드를 활용한 일반함수는 자기자신만의 this를 가지고 있다
// 함수가 호출되는 시점인 런타임에 this를 자신을 호출한 객체에 묶어버린다 = 다이나믹바인딩 = 런타임바인딩
// 함수를 어떻게 호출하는지에 따라 this가 정해진다
// this는 함수를 호출한 객체가 된다

// const object = {
//     name: "별코딩",
//     main: function () {
//       console.log(this);
//     }.bind({ name: "멋진 객체" }),
//   };

// 객체의 메서드로는 화살표함수보다는 일반함수로 작성하는게 보다 적합
// 화살표함수에서는 객체 내부 속성에 접근이 어려운 경우가 많다
let name = "shim";
const object = {
  name: "별코딩",
  main: function () {
    console.log(this.name + "입니다");
  },
  mainArrow: () => {
    console.log(this.name);
  },
};

const object2 = {
  name: "다른 객체",
  main: object.main,
  mainArrow: object.mainArrow,
};

object.main();
object2.main();
object.mainArrow();
object2.mainArrow();
