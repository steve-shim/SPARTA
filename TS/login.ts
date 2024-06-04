class Session {
  protected token: string;

  constructor(token: string) {
    this.token = token;
  }

  protected validateToken(): boolean {
    // 세션 토큰 유효성을 검사하는 로직
    if (this.token) return true;
    return false;
  }
}

class Login extends Session {
  private _loggedIn = false;

  constructor(token: string) {
    super(token);
  }

  get loggedIn() {
    console.log("this.token ->", this.token);
    return this._loggedIn;
  }

  login(): void {
    if (this.validateToken()) {
      this._loggedIn = true;
      console.log("success login");
    } else {
      console.log("success fail!!");
      //throw new Error("failed validate token");
    }
  }
}

const shim = new Login("Shim");

shim.login();
// Property 'token' is protected and only accessible within class 'Session' and its subclasses.
// console.log("shim.token", shim.token);
// Property 'validateToken' is protected and only accessible within class 'Session' and its subclasses.
// console.log("shim.validateToken()", shim.validateToken());
console.log(shim.loggedIn);
