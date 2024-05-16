// *가 붙은 함수가 제너레이터 함수
// 제너레이터 함수는 실행하면, Iterator 객체가 반환(next()를 가지고 있음)

var addCoffee = function (prevName, name) {
  setTimeout(function () {
    coffeeMaker.next(prevName ? prevName + ", " + name : name);
  }, 500);
};

// yield 키워드를 만나면 멈춘다
// yield 키워드 뒤에 나오는 함수가 수행이 될때까지
var coffeeGenerator = function* () {
  var espresso = yield addCoffee("", "에스프레소");
  console.log("espresso", espresso);
  var americano = yield addCoffee(espresso, "아메리카노");
  console.log("americano", americano);
  var mocha = yield addCoffee(americano, "카페모카");
  console.log("mocha", mocha);
  var latte = yield addCoffee(mocha, "카페라떼");
  console.log("latte", latte);
};
let coffeeMaker = coffeeGenerator();
coffeeMaker.next();
