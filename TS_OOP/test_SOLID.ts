// [S] 클래스는 하나의 책임만 가져야 한다는 매우 기본적인 원칙
// [O] 클래스의 기존 코드를 변경하지 않고도 기능을 확장할 수 있어야 한다

// [D] 하위 수준 모듈(구현 클래스)보다 상위 수준 모듈(인터페이스)에 의존을 해야한다
interface MyStorage {
  save(data: string): void;
}

class MyLocalStorage implements MyStorage {
  save(data: string): void {
    console.log(`로컬에 저장: ${data}`);
  }
}

class MyCloudStorage implements MyStorage {
  save(data: string): void {
    console.log(`클라우드에 저장: ${data}`);
  }
}

class Database {
  // 상위 수준 모듈인 MyStorage 타입을 의존!
  // 여기서 MyLocalStorage, MyCloudStorage 같은 하위 수준 모듈에 의존하지 않는게 핵심!
  constructor(private storage: MyStorage) {}

  saveData(data: string): void {
    this.storage.save(data);
  }
}

const myLocalStorage = new MyLocalStorage();
const myCloudStorage = new MyCloudStorage();

const myLocalDatabase = new Database(myLocalStorage);
const myCloudDatabase = new Database(myCloudStorage);

myLocalDatabase.saveData("로컬 데이터");
myCloudDatabase.saveData("클라우드 데이터");
