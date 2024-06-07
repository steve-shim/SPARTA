class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log("동물 소리~");
  }
}

class Dog extends Animal {
  age: number;

  constructor(name: string) {
    super(name);
    this.age = 5;
  }

  makeSound() {
    console.log("멍멍!"); // 부모의 makeSound 동작과 달라요!
  }

  eat() {
    // Dog 클래스만의 새로운 함수 정의
    console.log("강아지가 사료를 먹습니다.");
  }
}

class Cat extends Animal {
  // Animal과 다를게 하나도 없어요!
}

// const dog = new Dog("누렁이");
// dog.makeSound(); // 출력: 멍멍!
// console.log(dog);

// const cat = new Cat("야옹이");
// cat.makeSound(); // 출력: 동물 소리~
// console.log(cat);

// let dog: Dog = new Dog("또순이");
// let animal: Animal = dog; // upcasting 발동!
// //animal.eat(); // 에러. 슈퍼타입(Animal)으로 변환이 되어 eat 메서드를 호출할 수 없어요!
// animal.makeSound(); // 멍멍!

let animal: Animal;
animal = new Dog("또순이");

let realDog: Dog = animal as Dog;
realDog.eat(); // 서브타입(Dog)로 변환이 되었기 때문에 eat 메서드를 호출할 수 있죠!
