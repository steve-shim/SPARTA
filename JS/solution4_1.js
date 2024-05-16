class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  });
}

function narutoIsNotOtaku() {
  let title = prompt("상품 번호를 입력하세요.", "1");

  return loadJson(`https://dummyjson.com/products/${title}`)
    .then((res) => {
      alert(`${res.title}: ${res.description}.`);
      return res;
    })
    .catch((err) => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("일치하는 상품이 없습니다!!");
        return narutoIsNotOtaku();
      } else {
        throw err;
      }
    });
}

narutoIsNotOtaku();
