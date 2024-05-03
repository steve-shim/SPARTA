// function solution(pstring) {
//   let answer = true;
//   let wordCnt = {};
//   let defaultValue = { P: 0, Y: 0, Z: 0 };

//   wordCnt = [...pstring.toUpperCase()].reduce((acc, cur) => {
//     if (cur === "P") {
//       acc["P"] += 1;
//     } else if (cur === "Y") {
//       acc["Y"] += 1;
//     } else {
//       acc["Z"] += 1;
//     }
//     return acc;
//   }, defaultValue);

//   if (wordCnt["P"] === wordCnt["Y"]) {
//     return true;
//   } else {
//     return false;
//   }

//   return answer;
// }

function solution(s) {
  var result = true;
  s = s.toUpperCase();
  var num = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === "P") num++; // p이면 갯수 더하기
    if (s[i] === "Y") num--; // y이면 갯수 빼기
  }
  result = num === 0; // p, y 갯수가 같으면 0 (p가 많으면 양수, 반대 음수)

  return result;
}

console.log(solution("pPoooyY"));
console.log(solution("Pyy"));
