// [1]
// // 함수 안에 있는 this는 함수를 호출한 객체이다
// // main()은 window객체에 등록이 된다.
// function main() {
//   console.log(this);
// }

// main(); // window.main(); main 함수를 호출한 객체는 window다

// [2]
// 함수 안에 있는 this는 함수를 호출한 객체이다
// const object = {
//   name: "별코딩",
//   main: function () {
//     console.log(this);
//     console.log(this.name);
//   },
// };

// object.main();
// const main2 = object.main;
//main2(); //-> window가 출력된다: 더이상 main2 함수를 호출한 객체는 object가 아니기 떄문에

// [3]
// 함수가 object안에서 정의가 되었건 밖에서 정의가 되었건 상관없이
// main 함수를 호출한 객체가 object라면 this는 object가 된다
// function main() {
//   console.log(this);
// }

// const object = {
//   name: "별코딩",
//   main: main,
// };

// object.main();

// [4]
// function main() {
//   console.log(this); // -> { name: '작은 별코딩', main: [Function: main] }
// }

// const object = {
//   name: "별코딩",
//   smallObject: {
//     name: "작은 별코딩",
//     main,
//   },
// };

// object.smallObject.main();

// [5] mainBind를 어떻게 호출하던 상관없이 함수 내의 this를 원하는 객체로 고정
// function main() {
//   console.log(this); // -> { name: 'hi' }
// }

// // bind는 새로운 함수를 반환해줌
// const mainBind = main.bind({ name: "hi" });
// mainBind(); // { name: 'hi' }

// const object = {
//   mainBind,
// };

// // mainBind을 호출한 객체는 object임에도 바인드된 객체가 출력된다
// object.mainBind(); // { name: 'hi' }
