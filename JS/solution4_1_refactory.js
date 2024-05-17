class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  // promise then 부분
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

async function narutoIsNotOtaku() {
  let title;
  while (true) {
    title = prompt("상품 번호를 입력하세요.", "1");
    // promise 체이닝 catch 부분 -> try catch문 사용해서 동일 로직 시행 가능
    try {
      res = await loadJson(`https://dummyjson.com/products/${title}`);
      break;
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("일치하는 상품이 없습니다!!");
      } else {
        throw err;
      }
    }
  }

  alert(`${res.title}: ${res.description}.`);
  return res;
}

narutoIsNotOtaku();
