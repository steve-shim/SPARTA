var a;
console.log(a); // (1) 값을 대입하지 않은 변수에 접근

var obj = { a: 1 };
console.log(obj.a); // 1
console.log(obj.b); // (2) 존재하지 않는 property에 접근
// console.log(b); // 오류 발생

var func = function () {};
var c = func(); // (3) 반환 값이 없는 function
console.log(c); // undefined

var n = null;
console.log(typeof n); // object (typeof null이 object인 것은 유명한 javascript 자체 버그)

//동등연산자(equality operator)
console.log(n == undefined); // true
console.log(n == null); // true

//일치연산자(identity operator)
console.log(n === undefined); // false
console.log(n === null); // true
