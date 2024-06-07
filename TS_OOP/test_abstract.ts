abstract class Shape {
  abstract getArea(): number; // 추상 함수 정의!!!

  printArea() {
    console.log(`도형 넓이: ${this.getArea()}`);
  }
}

// Shape 추상 클래스를 상속했기 때문에 자식은 무조건 getArea()함수를 구현해야 한다
class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    // 원의 넓이를 구하는 공식은 파이 X 반지름 X 반지름
    return Math.PI * this.radius * this.radius;
  }
}

// Shape 추상 클래스를 상속했기 때문에 자식은 무조건 getArea()함수를 구현해야 한다
class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    // 사각형의 넓이를 구하는 공식은 가로 X 세로
    return this.width * this.height;
  }
}

const circle = new Circle(5);
circle.printArea();

const rectangle = new Rectangle(4, 6);
rectangle.printArea();
