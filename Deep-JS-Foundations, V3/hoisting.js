console.log(myVariable); // undefined
var myVariable = "Hello, hoisting!";
console.log(myVariable); // Hello, hoisting!
// = = = = = = = = = = = = = = = = = = = =
console.log(myFunction()); // Hello, hoisting!
function myFunction() {
  return "Hello, hoisting!";
}
console.log(myFunction()); // Hello, hoisting!
// = = = = = = = = = = = = = = = = = = = =

// var x = 1;
// function outer() {
//   console.log(x); // 1
//   var x = 2;
//   function inner() {
//     console.log(x); // 2
//   }
//   inner();
// }
// outer();
// = = = = = = = = = = = = = = = = = = = =

function outer() {
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  if (true) {
    let x = 2;
  }
  console.log(x); // ReferenceError: 'x' is not defined
}
outer();
// = = = = = = = = = = = = = = = = = = = =

function outer() {
  console.log(x); // undefined
  if (true) {
    var x = 2;
  }
  console.log(x); // 2
}
outer();
// = = = = = = = = = = = = = = = = = = = =

console.log(x); // undefined
let x = "Hello, hoisting!";
console.log(x); // Hello, hoisting!
// = = = = = = = = = = = = = = = = = = = =

console.log(a); // undefined
var a = 10;
console.log(a); // 10
// = = = = = = = = = = = = = = = = = = = =

console.log(a); // undefined
var a = 10;
console.log(a); // 10
// = = = = = = = = = = = = = = = = = = = =

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // 20

// = = = = = = = = = = = = = = = = = = = =

console.log(c); // undefined
if (true) {
  var c = 30;
}
console.log(c); // undefined

// = = = = = = = = = = = = = = = = = = = =

console.log(c); // undefined
if (true) {
  var c = 30;
}
console.log(c); // undefined

// = = = = = = = = = = = = = = = = = = = =

console.log(d); // ReferenceError: d is not defined
if (true) {
  let d = 40;
}
console.log(d); // undefined

// = = = = = = = = = = = = = = = = = = = =

console.log(e); // undefined
function example() {
  console.log(e); // undefined
  var e = 50;
}
example();

// = = = = = = = = = = = = = = = = = = = =
foo(); // This works even though foo is defined later in the code

function foo() {
  console.log("Hello, world!");
}

console.log(x); // undefined
var x = 10;
console.log(x); // 10

// = = = = = = = = = = = = = = = = = = = =

const add = (a, b) => a+b
function add(a, b) {
return a+b
}

console.log(x);
var x = 5;

console.log(a);
let a = 3;
console.log(a);
const a = 5;
// -------------
var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}
b();
console.log(a);

--------
function test() {
    console.log(a);
    var a = 'Hello, world!';
}
test();
---------
a = 'Hello';
function a() {}
console.log(typeof a);
---------
var foo = function() {
    console.log('first');
}
foo();

var foo = function() {
    console.log('second');
}
foo();
// ----------
console.log(a());
var a = function() {
    return 'Hello world!';
}

// -------------
function test() {
    console.log(x);
    var x = 5;
    console.log(x);
    var x = 10;
}
test();
// -------------
console.log(a());
var a = 3;
console.log(a());
// -----------------
function foo() {
    bar();
    function bar() {
        console.log('Hello, world!');
    }
}
foo();
bar();
// ------------------
var a = 1;
function b() {
    a = 10;
    var a;
    console.log(a);
}
b();
console.log(a);
// -----------------
console.log(foo);
function foo() {
    console.log('Hello, world!');
}
var foo = 'bar';
// ---------------
var a = 1;
function b() {
    console.log(a);
    a = 10;
    console.log(a);
    function a() {}
}
b();
console.log(a);
// ----------------
function outer() {
    inner();
    function inner() {
        console.log(foo);
        var foo = 'Hello';
    }
}
outer();
// -----------
var x = 'outer';
function outer() {
    var x = 'inner';
    console.log(x);
}
outer();
console.log(x);

// = = = = = = = = = = = = = = = = = = = =

// = = = = = = = = = = = = = = = = = = = =
