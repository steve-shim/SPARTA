// const object = {
//   message: "Hello, World!",

//   getMessage() {
//     const message = "Hello, Earth!";
//     console.log(this.message);
//   },
// };

// object.getMessage(); // What is logged?
// setTimeout(object.getMessage, 500);
// setTimeout(object.getMessage.bind(object), 1000);
// setTimeout(() => object.getMessage(), 2000);

// function Pet(name) {
//   this.name = name;

//   this.getName = () => this.name;
// }

// const cat = new Pet("Fluffy");

// console.log(cat.getName()); // What is logged?

// const { getName } = cat;
// console.log(getName()); // What is logged?

// const object2 = {
//   message: "Hello, World!!!",
// };

// function logMessage() {
//   console.log(this.message); // logs 'Hello, World!'
// }

// logMessage();

// // Using func.call() method
// logMessage.call(object2);

// // Using func.apply() method
// logMessage.apply(object2);

// // Creating a bound function
// const boundLogMessage = logMessage.bind(object2);
// boundLogMessage();

const object3 = {
  who: "World",

  greet() {
    return `Hello, ${this.who}!`;
  },

  farewell: () => {
    return `Goodbye, ${this.who}!`;
  },
};

console.log(object3.greet()); // What is logged?
console.log(object3.farewell()); // What is logged?

var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}

const object4 = {
  length: 5,
  method(callback) {
    callback();
  },
};

object4.method(callback, 1, 2);
