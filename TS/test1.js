const obj = { latitude: 2, longitude: 3 };
const result = obj.latitude * obj.longitute;
// 보통은 이런 실수는 컴파일러가 잡아줘야 되는데 일단 실행을 시켜줌 (2 * undefined = NaN)
console.log(result); // NaN이라는 엉뚱한 값 출현!
