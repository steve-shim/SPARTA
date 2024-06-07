enum UserRole {
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
  USER = "USER",
}

enum UserLevel {
  NOT_OPERATOR, // 0
  OPERATOR, // 1
}

function checkPermission(userRole: UserRole, userLevel: UserLevel): void {
  if (userLevel === UserLevel.NOT_OPERATOR) {
    console.log("당신은 일반 사용자 레벨이에요");
  } else {
    console.log("당신은 운영자 레벨이군요");
  }

  if (userRole === UserRole.ADMIN) {
    console.log("당신은 어드민이군요");
  } else if (userRole === UserRole.EDITOR) {
    console.log("당신은 에디터에요");
  } else {
    console.log("당신은 사용자군요");
  }
}

const userRole: UserRole = UserRole.EDITOR;
const userLevel: UserLevel = UserLevel.NOT_OPERATOR;
checkPermission(userRole, userLevel);

// type StringOrNumber = string | number; // 원한다면 | boolean 이런식으로 타입 추가가 가능해요!

// function processValue(value: StringOrNumber) {
//   if (typeof value === "string") {
//     // value는 여기서 string 타입으로 간주됩니다.
//     console.log("String value:", value);
//   } else if (typeof value === "number") {
//     // value는 여기서 number 타입으로 간주되구요!
//     console.log("Number value:", value);
//   }
// }

// processValue("Hello");
// processValue(42);
