function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };

  this.down = function () {
    return --count;
  };
}

// 생성자 함수의 두 중첩 함수는
// 동일한 외부 렉시컬 환경에서 만들어졌기 때문에
// 같은 count 변수를 공유합니다.
let counter = new Counter();

console.log(counter.up()); // 1
console.log(counter.up()); // 2
console.log(counter.up()); // 3
console.log(counter.down()); // 2

let counter2 = new Counter();

console.log(counter2.down()); // -1
console.log(counter2.down()); // -2
console.log(counter2.up()); // -1
