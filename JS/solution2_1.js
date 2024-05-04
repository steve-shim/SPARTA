function solution(stingList, n) {
  let answer = [];

  const addFirstWord = (word) => {
    return `${word[n]}${word}`;
  };

  answer = stingList
    .map(addFirstWord)
    .sort()
    .map((word) => word.slice(1));

  return answer;
}

console.log(solution(["sun", "bed", "car"], 1)); // ["car", "bed", "sun"]
console.log(solution(["abce", "abcd", "cdx"], 2)); // ["abcd", "abce", "cdx"]
