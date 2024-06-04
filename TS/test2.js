class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  growOlder() {
    this.age += 1;
  }
}

const spartan = new Person("Spartan", 30);
spartan.age = 25; // 외부에서 age 속성을 마음대로 조작할 수 있어요! 뜻밖에 회춘?
spartan.growOlder();
console.log(spartan.age);
