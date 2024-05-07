var user = {
  name: "wonjang",
  gender: "male",
};

// 객체를 할당하는 방식으로 얕은 복사를 함
// 객체의 프로피터(속성)에 접근해서 이름변경 -> 가변
var changeName = function (user, newName) {
  var newUser = user;
  newUser.name = newName;
  return newUser;
};

var user2 = changeName(user, "twojang");

if (user !== user2) {
  console.log("유저 정보가 변경되었습니다.");
}

// user의 객체 속성도 바뀐다
console.log(user.name, user2.name); // twojang twojang
console.log(user === user2); // true
