var addCoffee = function (name) {
  return function (prevName) {
    console.log("name", name);
    console.log("prevName", prevName);
    return new Promise(function (resolve) {
      setTimeout(function () {
        var newName = prevName ? `${prevName}, ${name}` : name;
        console.log("newName", newName);
        resolve(`${newName}!!`);
      }, 1000);
    });
  };
};

addCoffee("에스프레소")("ㅁㅁ")
  .then(addCoffee("아메리카노"))
  .then(addCoffee("카페모카"))
  .then(addCoffee("카페라떼"))
  .then((final) => {
    console.log("final", final);
  });
