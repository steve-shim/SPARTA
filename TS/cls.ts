class Person {
  name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person = new Person("Spartan", 30);

console.log(person.name); // 출력: 'Spartan'
console.log(person.age); // 출력: 30

person.name = "Jane"; // 'name'은 다시 할당할 수 있다!
person.age = 25; // 에러: 'age'은 readonly 속성이므로 다시 할당할 수 없어요!
