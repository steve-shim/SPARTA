const name = "nbc";
const age = "30";

const obj = {
  name,
  age,
};

console.log(obj);

// 배열
let arr = [1, 2, 3];

let newArr = [...arr, 4];
console.log(newArr); // [1,2,3,4]

// 객체
let user = { name: "nbc", age: 30 };
let user2 = { ...user };

user2.name = "nbc2";

console.log(user.name); // nbc
console.log(user2.name); // nbc2

// rest parameter
function func(a, b, ...args) {
  console.log(args, args.length);
  console.log(...args);
}

func(1, 2, 3); // 3
func(1, 2, 3, 4, 5, 6, 7); // 3 4 5 6 7

// 함수는 다른 함수의 인자로 전달할 수 있습니다.
// 이것은 콜백(callback)이나 고차 함수(higher-order function)를 작성하는 데 사용
function callFunction(func) {
  func();
}

const sayHello = function () {
  console.log("Hello!");
};

callFunction(sayHello); // "Hello!" 출력

// 함수는 값으로 취급되기 때문에, 다른 함수에서 반환할 수 있습니다.
// 이것은 함수 팩토리(factory)나 클로저(closure)를 작성하는 데 사용
function createAdder(num) {
  return function (x) {
    return x + num;
  };
}

const addFive = createAdder(5);
console.log(addFive(10)); // 15 출력

const person = {
  name: "John",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.sayHello(); // "Hello, my name is John" 출력

// 화살표함수를 했을때 this.name이 undefined가 나온다
// 화살표함수는 this를 바인딩 하지 않는다
const person2 = {
  name: "John",
  sayHello: () => {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person2.sayHello(); // "Hello, my name is undefined" 출력

function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

function add(x, y) {
  return x + y;
}

// 클로저로부터 함수 생성
const multiplyByTwo = multiplyBy(2);
const multiplyByThree = multiplyBy(3);

const result = add(multiplyByTwo(5), multiplyByThree(10)); // 40 출력
console.log("result", result);
