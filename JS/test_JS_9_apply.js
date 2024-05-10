//비효율
var numbers = [10, 20, 3, 16, 45];
var max = (min = numbers[0]);
numbers.forEach(function (number) {
  // 현재 돌아가는 숫자가 max값 보다 큰 경우
  if (number > max) {
    // max 값을 교체
    max = number;
  }

  // 현재 돌아가는 숫자가 min값 보다 작은 경우
  if (number < min) {
    // min 값을 교체
    min = number;
  }
});

console.log(max, min);

//효율
var numbers = [10, 20, 3, 16, 45];
var max = Math.max.apply(null, numbers);
var min = Math.min.apply(null, numbers);
console.log(max, min);

// 펼치기 연산자(Spread Operation)를 통하면 더 간편하게 해결도 가능해요
// const numbers = [10, 20, 3, 16, 45];
// const max = Math.max(...numbers);
// const min = Math.min(...numbers);
// console.log(max, min);
