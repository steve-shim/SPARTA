// coffeeMaker 함수에서 호출할 함수, addCoffee 선언
// Promise를 반환
var addCoffee = function (name) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(`<<${name}>>`);
    }, 500);
  });
};

var TimeCoffee = function () {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Loading...1");
      resolve(123);
      console.log("Loading...2");
    }, 2000);
  });
};

// async 키워드가 붙은 함수는 중괄호 내부 스코프 안에서 await을 만난 메서드는
// 그 메서드가 끝날때까지 무조건 기다리게 되어있다
// 근데 그 메서드는 항상 Promise를 반환해야만 한다
var coffeeMaker = async function () {
  var coffeeList = "";
  var _addCoffee = async function (name) {
    coffeeList += (coffeeList ? ", " : "") + (await addCoffee(name));
    return "hi";
  };
  var text = await _addCoffee("에스프레소");
  console.log("coffeeList", coffeeList);
  console.log("text", text);
  var num = await TimeCoffee("에스프레소");
  console.log("num", num);
  var text = await _addCoffee("아메리카노");
  console.log(coffeeList);
  console.log("text", text);
  var text = await _addCoffee("카페모카");
  console.log(coffeeList);
  console.log("text", text);
  var text = await _addCoffee("카페라떼");
  console.log(coffeeList);
  console.log("text", text);
  return coffeeList;
};
coffeeMaker().then((a) => {
  console.log("a", a);
});
