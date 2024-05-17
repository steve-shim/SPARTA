class Person {
  // constructor는 이름을 변경할 수 없어요.
  constructor(name, age) {
    // 이름(name)과 나이(age)가 없으면 사람이 아니죠?
    // new라는 키워드를 이용해서 인스턴스를 만들 때, 기본적으로
    // 넣어야 하는 값들을 의미해요! :)
    // 여기서 말하는 this는 만들어질 인스턴스를 의미한다고 생각해주세요!
    this.name = name;
    this.age = age;
  }

  // 다양한 메소드를 아래와 같이 정의할 수 있어요.
  // 여기서 this.name으로 내부 값을 접근해야 함을 잊지 마세요! :)
  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
  sayHelloArrow = () => {
    console.log(`Hello, my name is ${JSON.stringify(this)}`);
  };
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

// 만든 객체를 토대로 메서드 호출해보기
person1.sayHello(); // 출력: "Hello, my name is Alice and I am 30 years old."
person2.sayHello(); // 출력: "Hello, my name is Bob and I am 25 years old."
person1.sayHelloArrow();
