async function sampleFunc() {
  // time start
  console.log("sampleFunc excuted");
  console.time("promise all example");

  // first promise
  const fetchNameList = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = ["Jack", "Joe", "Beck"];
        resolve(result);
      }, 300);
    });
  };

  // second promise
  const fetchFruits = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = ["Apple", "Orange", "Banana"];
        resolve(result);
      }, 200);
    });
  };

  // third promise
  const fetchTechCompanies = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = ["Apple", "Google", "Amazon"];
        resolve(result);
      }, 500);
    });
  };

  // promise all
  const result = await Promise.all([
    fetchNameList(),
    fetchFruits(),
    fetchTechCompanies(),
  ]);

  // time end
  console.timeEnd("promise all example");

  console.log("%j", result);
}

// execute
sampleFunc();

async function sampleFunc2() {
  console.log("sampleFunc2 excuted");
  // time start
  console.time("promise all example2");

  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 600, "foo");
  });

  await Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log("values", values);
  });

  const values = await Promise.all([promise1, promise2, promise3]);
  // await Promise.all([promise1, promise2, promise3]).then((values) => {
  //   console.log("values", values);
  // });

  // time end
  console.timeEnd("promise all example2");
  console.log("%j", values);
}
// execute
sampleFunc2();
console.log("hihi");
