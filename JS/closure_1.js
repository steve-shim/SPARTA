// 1
const result = (function immediate(number) {
  const message = `number is: ${number}`;
  return message;
})(100);
console.log(result);

// 2
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged? 1
  }
  console.log(count); // What is logged? 0
})();

// 3
for (var i = 0; i < 3; i++) {
  console.log("-----------------------", i);
  setTimeout(function log() {
    console.log(i); // What is logged? 3 3 3
  }, 0);
}

// 4
for (var i = 0; i < 3; i++) {
  setTimeout(
    function log(j) {
      console.log(j); // What is logged? 3초 후, 0 1 2
    },
    3000,
    i
  );
}

// 5
function createIncrement() {
  let count = 0;
  function increment() {
    count++;
    console.log(`count 증가 ${count}`);
  }

  let message = `Count is ${count}`; // Count is 0
  function log2() {
    console.log(message);
    console.log(`Count ${count}`);
  }

  function log() {
    let message = `Count is ${count}`;
    console.log(message);
  }

  return [increment, log, log2];
}

const [increment, log, log2] = createIncrement();
log(); // What is logged? Count is 0
increment(); // count 증가 1
log(); // What is logged? Count is 1
increment(); // count 증가 2
log(); // What is logged? Count is 2
log2(); // What is logged? Count is 0

// 6-problem
// function createStack() {
//   return {
//     items: [],
//     push(item) {
//       this.items.push(item);
//     },
//     pop() {
//       return this.items.pop();
//     },
//   };
// }

// const stack = createStack();
// stack.push(10);
// stack.push(5);
// stack.pop(); // => 5

// console.log(stack.items); // => [10]
// stack.items = [10, 100, 1000];
// console.log(stack.items); // => [10, 100, 1000]

// 6-solve
function createStack(items = []) {
  const noRefItems = [...items];
  function push(par) {
    noRefItems.push(par);
  }

  function pop() {
    console.log("items", items);
    console.log("noRefItems", noRefItems);
    return noRefItems.pop();
  }

  function checkItems() {
    console.log(`items status: ${noRefItems}`);
  }

  return { push, pop, checkItems };
}

const items = [1, 2, 3];
const stack = createStack(items);

stack.push(10);
stack.push(5);

// Hack the items! Broken encapsulation!
items.length = 1;

stack.push(77);
stack.push(777);
console.log(stack.pop()); // returns 10 instead of 5

stack.checkItems(); // items status: 1,2,3,10,5,77
