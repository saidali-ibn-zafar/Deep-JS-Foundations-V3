// Variable Hoisting with var
console.log(myVariable); // undefined
var myVariable = "Hello, hoisting!";
console.log(myVariable); // Hello, hoisting!

// Function Hoisting
console.log(myFunction()); // Hello, hoisting!
function myFunction() {
  return "Hello, hoisting!";
}
console.log(myFunction()); // Hello, hoisting!

// TDZ and Function Scope
function outer() {
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  if (true) {
    let x = 2;
  }
  console.log(x); // ReferenceError: 'x' is not defined
}
outer();

// Hoisting and let
console.log(x); // undefined
let x = "Hello, hoisting!";
console.log(x); // Hello, hoisting!

// var and let in the same scope
console.log(a); // undefined
var a = 10;
console.log(a); // 10

// TDZ Error with let
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // 20

// var and Block Scope
console.log(c); // undefined
if (true) {
  var c = 30;
}
console.log(c); // undefined

// TDZ Error with Block Scope let
console.log(d); // ReferenceError: d is not defined
if (true) {
  let d = 40;
}
console.log(d); // undefined

// Function Scope Hoisting
console.log(e); // undefined
function example() {
  console.log(e); // undefined
  var e = 50;
}
example();

// Function Hoisting and var
foo(); // This works even though foo is defined later in the code
function foo() {
  console.log("Hello, world!");
}
console.log(x); // undefined
var x = 10;
console.log(x); // 10

// Redeclaration of a Function
const add = (a, b) => a + b;
function add(a, b) {
  return a + b;
}

// Scoping and Redeclaration with var
console.log(x); // undefined
var x = 5;
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 3;
console.log(a); // 3
const a = 5; // SyntaxError: Identifier 'a' has already been declared

// Function Scope and Redeclaration
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a); // 1

// undefined Typeof Function
function test() {
  console.log(a);
  var a = 'Hello, world!';
}
test(); // undefined

// typeof Behavior
a = 'Hello';
function a() {}
console.log(typeof a); // function

// Function Overriding
var foo = function() {
  console.log('first');
}
foo(); // first
var foo = function() {
  console.log('second');
}
foo(); // second

// undefined Typeof Function
console.log(a());
var a = function() {
  return 'Hello world!';
}

// Test Scope and Redeclaration
function test() {
  console.log(x);
  var x = 5;
  console.log(x);
  var x = 10;
}
test();

// TypeError: a is not a function
console.log(a());
var a = 3;
console.log(a());

// Function Hoisting within Function
function foo() {
  bar();
  function bar() {
    console.log('Hello, world!');
  }
}
foo();

// Scope and var Redeclaration
var a = 1;
function b() {
  a = 10;
  var a;
  console.log(a);
}
b();
console.log(a);

// foo is not a function
console.log(foo);
function foo() {
  console.log('Hello, world!');
}
var foo = 'bar';

// Scope and var in Function
var a = 1;
function b() {
  console.log(a);
  a = 10;
  console.log(a);
  function a() {}
}
b();
console.log(a);

// Scope and Closure
function outer() {
  inner();
  function inner() {
    console.log(foo);
    var foo = 'Hello';
  }
}
outer();

// Scope and Shadowing
var x = 'outer';
function outer() {
  var x = 'inner';
  console.log(x);
}
outer();
console.log(x);
