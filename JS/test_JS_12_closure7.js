function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

let arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr2.filter(inArray([1, 2, 10]))); // 1,2

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

function byField(fieldName) {
  return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
}

// 이름을 기준으로 정렬(Ann, John, Pete)
console.log(users.sort(byField("name")));
//console.log(users.sort((a, b) => (a.name > b.name ? 1 : -1)));

// 나이를 기준으로 정렬(Pete, Ann, John)
console.log(users.sort(byField("age")));
// console.log(users.sort((a, b) => (a.age > b.age ? 1 : -1)));
