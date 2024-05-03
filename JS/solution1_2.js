// function solution(absolutes, signs) {
//   let result = 0;
//   let src = [...absolutes];

//   result = src.reduce((acc, cur, idx) => {
//     if (signs[idx]) {
//       acc += cur;
//     } else {
//       acc -= cur;
//     }
//     return acc;
//   }, 0);

//   return result;
// }

function solution(absolutes, signs) {
  let answer = 0;
  // 두 배열 길이 같음
  for (let i = 0; i < absolutes.length; i++) {
    // 부호에 따라 +-
    signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
  }
  return answer;
}

console.log(solution([4, 7, 12], [true, false, true]));
console.log(solution([1, 2, 3], [false, false, true]));
