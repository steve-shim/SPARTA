class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(
      `안녕하세요! 제 이름은 ${this.name}이고, 나이는 ${this.age}살입니다.`
    );
  }
}

const person = new Person("Spartan", 30);
//person.age = 50;
person.sayHello();
