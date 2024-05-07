var user = {
  name: "wonjang",
  gender: "male",
};

// 객체의 프로피터에 접근하는 것이 아니라, 아예 새로운 객체를 반환(새로운 주소 반환) -> 불변
var changeName = function (user, newName) {
  return {
    name: newName,
    gender: user.gender,
  };
};

var user2 = changeName(user, "twojang");

if (user !== user2) {
  console.log("유저 정보가 변경되었습니다.");
}

// user의 객체 속성도 바뀐다
console.log(user.name, user2.name); // wonjang twojang
console.log(user === user2); // false
