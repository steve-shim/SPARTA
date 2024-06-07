class Person {
  private name: string;
  private _age: number; // age가 private인 것을 주목하세요!

  constructor(name: string, age: number) {
    this.name = name;
    this._age = age;
    console.log("this.initage", this.age);
  }

  public growOlder(): void {
    this._age += 1;
    console.log("this.age", this._age);
  }

  // get, set 선언 시 멤버 변수와 동일한 이름을 사용하는 경우 충돌이 발생합니다.
  // 따라서 멤버 변수의 맨 앞에 _(UnderScore)를 추가해줍니다.
  // 이 경우 내부에선 _age을 제어 할 수 있지만,
  // 외부 모듈에선 해당 모듈의 멤버 변수인 _age을 볼 수 없습니다.
  get age(): number {
    return this._age;
  }
}

const spartan = new Person("Spartan", 30);
//spartan._age = 25; // Error: Property '_age' is private and only accessible within class 'Person'.
spartan.growOlder();
console.log(spartan.age); // [getter를 정의 안하는 경우 에러]Error: Property 'age' is private and only accessible within class 'Person'.
