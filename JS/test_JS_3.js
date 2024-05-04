// 자료구조 [Map / Set]
// const myMap = new Map();
// myMap.set("key", "value");
// console.log(myMap.get("key")); // 'value' 출력

// Map에서는 keys(), values(), entries() 메소드를 사용하여
// 키, 값 및 키-값 쌍을 반복할 수 있습니다.

const myMap = new Map();
myMap.set("one", 1);
myMap.set("two", 2);
myMap.set("three", 3);
console.log(myMap);

for (const key of myMap.keys()) {
  console.log(key);
}

for (const value of myMap.values()) {
  console.log(value);
}

for (const entry of myMap.entries()) {
  console.log(`${entry[0]}: ${entry[1]}`);
}

console.log(myMap.size); // 3 출력
console.log(myMap.has("two")); // true 출력
console.log(myMap.has("two2")); // false 출력

// const mySet = new Set();
// mySet.add("value1");
// mySet.add("value2");
// console.log(mySet.has("value1")); // true 출력

const mySet = new Set();
mySet.add("value1");
mySet.add("value2");
mySet.add("value3");
console.log(mySet);

for (const value of mySet.values()) {
  console.log(value);
}
