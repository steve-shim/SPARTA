let person = {
  name: "홍길동",
  age: 30,
  gender: "남자",
};

//let newPerson = Object.assign({}, person, { age: 35 });
let newPerson = Object.assign({}, person);

console.log(newPerson);

let person1 = {
  name: "홍길동",
  age: 30,
  gender: "여자",
};

let person2 = {
  age: 20,
  gender: "남자",
};

let mergedPerson = { ...person1, ...person2 };

console.log(mergedPerson);

let person4 = { name: "John", age: 30, gender: "male" };
for (let key in person4) {
  console.log(key + ": " + person4[key]);
}

let person5 = ["John", 30, "male"];
for (let key of person5) {
  console.log(key + ": ");
}

let [_, value2] = [1, "new"];
console.log(value2); // new

let [value1] = [1, "new"];
console.log(value1); // 1

let arr = ["value1", "value2", "value3"];
let [a, b] = arr;
console.log(a, b); // value1 value2 value3

// 객체의 경우
var user = { name: "nbc", age: 30 };
var { name, age } = user;

// let name = user.name;
// let age = user.age;

console.log(name, age); // nbc 30

// 새로운 이름으로 할당
var { name: newName, age: newAge } = user;
//console.log(name, age); // ReferenceError: name is not defined
console.log(newName, newAge); //nbc 30

var { name, age, birthDay } = user;
console.log(birthDay); // undefined

var { name, age, birthDay = "today" } = user;
console.log(birthDay); // today
