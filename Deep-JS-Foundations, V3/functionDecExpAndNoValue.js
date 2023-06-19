//------------------------------------------------------------

// Function expression with no return value
const f = () => {};

console.log(f()); // Output: undefined

//------------------------------------------------------------

// Function expression with immediate invocation and return value
const result = (() => {
  return "I'm immediately invoked!";
})();

console.log(result); // Output: I'm immediately invoked!

//------------------------------------------------------------

// Function declaration
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("John"); // Output: Hello, John!

//------------------------------------------------------------

// Function expression assigned to a variable
const addNumbers = function(a, b) {
  return a + b;
};

console.log(addNumbers(5, 3)); // Output: 8

//------------------------------------------------------------

// Function expression inside an object
const obj = {
  sayHello: function() {
    return "Hello!";
  }
};

console.log(obj.sayHello()); // Output: Hello!

//------------------------------------------------------------

// Function expression as a callback
function doSomething(callback) {
  callback();
}

doSomething(function() {
  console.log("Callback called!");
});

//------------------------------------------------------------
