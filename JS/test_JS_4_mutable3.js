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
  gender: "male",
};

var user2 = copyObject(user);
user2.name = "twojang";

if (user !== user2) {
  console.log("유저 정보가 변경되었습니다.");
}

// user의 객체 속성도 바뀐다
console.log(user.name, user2.name); // wonjang twojang
console.log(user === user2); // false
