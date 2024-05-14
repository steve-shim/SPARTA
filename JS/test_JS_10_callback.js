// 1. 호출 시점에 대한 제어권을 갖는다.
// setInterval : 반복해서 매개변수로 받은 콜백함수의 로직을 수행

var count = 0;
var cbFunc = function () {
  console.log(count);
  if (++count > 4) clearInterval(timer);
};

var timer = setInterval(cbFunc, 300);
// cbFunc()
// 콜백함수에 대한 호출 시점의 제어권은 우리에게 없고 콜백함수를 가져간 setInterval에게 있다

// 2. 인자에 대한 제어권을 갖는다. -> 명세서에 나와 있는 대로 인자를 넣어줘야한다
var newArr = [10, 20, 30].map(function (currentValue, index) {
  console.log(currentValue, index);
  return currentValue + 5;
});
console.log(newArr);

// 함수로서의 호출은 호출 주체가 없기 때문에 this가 전역 객체를 참조한다
// 메서드는 호출주체가 있기 때문에 this가 호출주체를 바라본다

// Array.prototype.map 메서드를 일반함수로 구현을해야 this가 호출객체 [1,2,3]이 된다
Array.prototype.mapaaa = function (callback, thisArg) {
  var mappedArr = [];
  console.log("this", this);
  console.log("thisArg", thisArg);
  for (var i = 0; i < this.length; i++) {
    // call의 첫 번째 인자는 thisArg가 존재하는 경우는 그 객체, 없으면 전역객체
    // call의 두 번째 인자는 this가 배열일 것(호출의 주체가 배열)이므로,
    // i번째 요소를 넣어서 인자로 전달
    var mappedValue = callback.call(thisArg || global, this[i]);
    mappedArr[i] = mappedValue;
  }
  return mappedArr;
};

const a = [1, 2, 3].mapaaa(
  function (item) {
    console.log("callback this", this);
    return item * 2;
  },
  { hi: "shim" }
);

console.log("ㅁaㅁ", a);
