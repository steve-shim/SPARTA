// Getters와 Setters
// 객체지향 프로그래밍 언어 -> G, S
// 클래스 --> 객체(인스턴스)
// 프로퍼티(constructor)
// new Class(a, b, c)

// setter를 쓰는 이유는 외부로부터 값이 들어왔을 때
// 내부적으로 검증을 한 후에 인스턴스 변수에 넣을 수 있다
class Rectangle {
  constructor(height, width) {
    // underscore : private(은밀하고, 감춰야 할 때)
    this._height = height;
    this._width = width;
  }

  // width를 위한 getter
  get width() {
    return this._width;
  }

  // width를 위한 setter
  set width(value) {
    // 검증 1 : value가 음수이면 오류!
    if (value <= 0) {
      //
      console.log("[오류] 가로길이는 0보다 커야 합니다!");
      return;
    } else if (typeof value !== "number") {
      console.log("[오류] 가로길이로 입력된 값이 숫자타입이 아닙니다!");
      return;
    }
    this._width = value;
  }

  // height를 위한 getter
  get height() {
    return `${this._height}!!!`;
  }

  // height를 위한 setter
  set height(value) {
    // 검증 1 : value가 음수이면 오류!
    if (value <= 0) {
      //
      console.log("[오류] 세로길이는 0보다 커야 합니다!");
      return;
    } else if (typeof value !== "number") {
      console.log("[오류] 세로길이로 입력된 값이 숫자타입이 아닙니다!");
      return;
    }
    this._height = value;
  }

  // getArea : 가로 * 세로 => 넓이
  getArea() {
    const a = this._width * this._height;
    console.log(`넓이는 => ${a}입니다.`);
  }
}

// instance 생성시 나올 수 있는 에러
// RangeError: Maximum call stack size exceeded -> 무한루프, 콜스택에 쌓이는 실행 컨택스트가 계속해서 생김
// this로 접근하는 property에 underscore(_)를 사용하지 않았을 경우
// this.height = value 에 set할때 set height(value) {} 함수를 다시 탄다
const rect1 = new Rectangle(10, 7);
rect1.getArea();
// const rect2 = new Rectangle(10, 30);
// const rect3 = new Rectangle(15, 20);
console.log(rect1._height);
console.log(rect1.height);
console.log(rect1.width);
rect1.width = "abc";
