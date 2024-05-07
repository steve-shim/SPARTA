// target은 객체
var copyObject = function (target) {
  var result = {};

  // for in 구문을 이용하여, 객체의 모든 프로퍼티에 접근
  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
};

var user = {
  name: "wonjang",
  urls: {
    portfolio: "http://github.com/abc",
    blog: "http://blog.com",
    facebook: "http://facebook.com/abc",
  },
};

var user2 = copyObject(user);

user2.name = "twojang";

// 바로 아래 단계에 대해서는 불변성을 유지하기 때문에 값이 달라지죠.
console.log(user.name === user2.name); // false

// 더 깊은 단계에 대해서는 불변성을 유지하지 못하기 때문에 값이 같아요.
// 더 혼란스러워 지는거죠 ㅠㅠ
user2.urls.portfolio = "http://portfolio.com";
console.log(user.urls.portfolio === user2.urls.portfolio); // true

// 아래 예도 똑같아요.
user2.urls.blog = "";
console.log(user.urls.blog === user2.urls.blog); // true

console.log("user", user);
console.log("user2", user2);
