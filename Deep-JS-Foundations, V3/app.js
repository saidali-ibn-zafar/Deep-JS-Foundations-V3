// = = = = = = = = = = = = = = = = = = = = = = =
// NaN & isNaN
var myAge = Number("0o46"); // 38
var myNextAge = Number("39"); // 39
var myCatsAge = Number("n/a"); // NaN
myAge - "my son's age"; // NaN

myCatsAge === myCatsAge; // false OOPS!

isNaN(myAge); // false
isNaN(myCatsAge); // true
isNaN("my son's age"); //true OOPS!

Number.isNaN(myCatsAge); // true
Number.isNaN("my son's age"); // false

// NaN: is a Number, but INVALID NUMBER
// dont undefined
// dont null
// dont false
// dont -1
// dont 0

// = = = = = = = = = = = = = = = = = = = = = = =
// Negative Zero
var trendRate = -0;
trendRate === -0; // true

trendRate.toString(); // "0" OOPS!
trendRate === 0; // true OOPS!
trendRate < 0; // false
trendRate > 0; // false

Object.is(trendRate, -0);
Object.is(trendRate, 0);

Math.sign(-3); // -1
Math.sign(3); // 1
Math.sign(-0); // -0 ???
Math.sign(0); // 0 ???

// "fix" Math.sign(...)
function sign(v) {
  return v !== 0 ? Math.sign(v) : Object.is(v, -0) ? -1 : 1;
}

sign(-3);
sign(3);
sign(-0);
sign(0);

function formatTrend(trendRate) {
  var direction = trendRate < 0 || Object.is(trendRate, -0) ? "DOWN" : "UP";
  return `${direction} ${Math.abs(trendRate)}`;
}

formatTrend(-3); // "DOWN 3"
formatTrend(3); // "UP 3"
formatTrend(-0); // "DOWN 0"
formatTrend(0); // "UP 3"

// = = = = = = = = = = = = = = = = = = = = = = =
// type check exercise
// TODO: define polyfill for "Object.is(...)"

if (!Object.is || true) {
  Object.is = function ObjectIs(x, y) {
    var xNegZero = isItNegZero(x);
    var yNegZero = isItNegZero(y);

    if (xNegZero || yNegZero) {
      return xNegZero && yNegZero;
    } else if (isItNaN(x) && isItNaN(y)) {
      return true;
    } else {
      return x === y;
    }

    // = = = = = = = = = = = = = = = =
    function isItNegZero(v) {
      return v == 0 && 1 / v == -Infinity;
    }

    function isItNaN(v) {
      return v !== v;
    }
  };
}

// test:
console.log(Object.is(42, 42) === true);
console.log(Object.is("foo", "foo") === true);
console.log(Object.is(false, false) === true);
console.log(Object.is(null, null) === true);
console.log(Object.is(undefined, undefined) === true);
console.log(Object.is(NaN, NaN) === true);
console.log(Object.is(-0, -0) === true);
console.log(Object.is(0, 0) === true);

console.log(Object.is(-0, 0) === false);
console.log(Object.is(0, -0) === false);
console.log(Object.is(0, NaN) === false);
console.log(Object.is(NaN, 0) === false);
console.log(Object.is(42, "42") === false);
console.log(Object.is("42", 42) === false);
console.log(Object.is("foo", "bar") === false);
console.log(Object.is(true, false) === false);
console.log(Object.is(null, undefined) === false);

// = = = = = = = = = = = = = = = = = = = = = = =
// Fundamental Objects

// = = = = = = = = = = = = = = = = = = = = = = =
var yesterday = new Date("May 21, 2023");
yesterday.toUTCString();
console.log(yesterday); // Sun May 21 2023 00:00:00 GMT+0200 (Central European Summer Time)

// var myGPA = String(transcript.gpa);
// console.log(myGPA);

// = = = = = = = = = = = = = = = = = = = = = = =
// Abstract Operations

// ToPrimative(hint)

// toString()
// toNumber()
// toBoolean()

// = = = = = = = = = = = = = = = = = = = = = = =
// Cases of Coercion

var numStudents = 16;

console.log(`There are ${numStudents} students.`);
// There are 16 students.

var msg1 = "There are ";
var numStudents = 16;
var msg2 = " students.";
console.log(msg1 + numStudents + msg2);
// There are 16 students.

var stringNum = "12";
console.log(+stringNum + 1); // +stringNum makes it NUMBER just +
// OR Number(...)

// = = = = = = = = = = = = = = = = = = = = = = =
// Corner cases

Number(true); // 1
Number(false); // 0

1 < 2 < 3; // true
// because (1 < 2) = true and true = 1,  1 < 3

3 > 2 > 1; // false
// because  (3 > 2) = true, true was 1, and 1 > 1 is false

// = = = = = = = = = = = = = = = = = = = = = = =
// Implict != Magic
// Implict != Bad
// Implict: Abstracted

// = = = = = = = = = = = = = = = = = = = = = = =
// Coercion Exercise
// Type coercion can be explicit and implicit.

const isValidName = (name) => {
  if (typeof name == "string" && name.trim().length >= 3) {
    return true;
  }
  return false;
};

const hoursAttended = (attended, length) => {
  if (typeof attended == "string" && attended.trim() != "") {
    attended = Number(attended);
  }
  if (typeof length == "string" && length.trim() != "") {
    length = Number(length);
  }
  if (
    typeof attended == "number" &&
    typeof length == "number" &&
    attended >= 0 &&
    length >= 0 &&
    Number.isInteger(attended) &&
    Number.isInteger(length) &&
    attended <= length
  ) {
    return true;
  }
  return false;
};

// = = = = = = = = = = = = = = = = = = = = = = =
console.log(isValidName("Saidali") === true);
console.log(hoursAttended(6, 10) === true);
console.log(hoursAttended(6, "10") === true);
console.log(hoursAttended("6", 10) === true);
console.log(hoursAttended("6", "10") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName(" \t\n") === false);
console.log(isValidName("X") === false);
console.log(hoursAttended("", 6) === false);

// = = = = = = = = = = = = = = = = = = = = = = =
// Double & Triple Equals

// == checks value(loose)
// === checks value and type (strict)

console.log(1 == 1); // true
console.log(1 === 1); // true

console.log(1 == "1"); // true
console.log(1 === "1"); // false

// ! ! ! ! ! ! ! !

var element = "25";

var box1 = 16;
var box2 = element.value;

if (Number(box1) === Number(box2)) {
  // ...
}

if (box1 == box2) {
  // ...
}

// ! ! ! ! ! ! ! !

// = = = = = = = = = = = = = = = = = = = = = = =
// var workShopStudents = [];

// if(workShopStudents){
// if(Boolean(workShopStudents)){
// if(true){
//  Yep
// }}}

// if (workShopStudents == true){
//   if("" == true){
//     if(0 == 1){
//       if(false){
// Nope :(
// }}}}

// if (workShopStudents == false){
// if("" == false){
// if(0 == 0){
// if(true){
// Yep
// }}}}

// = = = = = = = = = = = = = = = = = = = = = = =
// Equality exercises

// TODO: write `findAll(..)`
function findAll(match, arr) {
  var ret = [];
  for (let v of arr) {
    if (Object.is(match, v)) {
      ret.push(v);
    } else if (match == null && v == null) {
      ret.push(v);
    } else if (typeof match == "boolean" && typeof v == "boolean") {
      if (match == v) {
        ret.push(v);
      }
    } else if (
      typeof match == "string" &&
      match.trim() != "" &&
      typeof v == "number" &&
      !Object.is(v, -0)
    ) {
      if (match == v) {
        ret.push(v);
      }
    } else if (
      typeof match == "number" &&
      !Object.is(match, -0) &&
      !Object.is(match, NaN) &&
      !Object.is(match, Infinity) &&
      !Object.is(match, -Infinity) &&
      typeof v == "string" &&
      v.trim() != ""
    ) {
      if (match == v) {
        ret.push(v);
      }
    }
  }
  return ret;
}

// tests:
var myObj = { a: 2 };

var values = [
  null,
  undefined,
  -0,
  0,
  13,
  42,
  NaN,
  -Infinity,
  Infinity,
  "",
  "0",
  "42",
  "42hello",
  "true",
  "NaN",
  true,
  false,
  myObj,
];

console.log("Equality exercises:");
console.log(setsMatch(findAll(null, values), [null, undefined]) === true);
console.log(setsMatch(findAll(undefined, values), [null, undefined]) === true);
console.log(setsMatch(findAll(0, values), [0, "0"]) === true);
console.log(setsMatch(findAll(-0, values), [-0]) === true);
console.log(setsMatch(findAll(13, values), [13]) === true);
console.log(setsMatch(findAll(42, values), [42, "42"]) === true);
console.log(setsMatch(findAll(NaN, values), [NaN]) === true);
console.log(setsMatch(findAll(-Infinity, values), [-Infinity]) === true);
console.log(setsMatch(findAll(Infinity, values), [Infinity]) === true);
console.log(setsMatch(findAll("", values), [""]) === true);
console.log(setsMatch(findAll("0", values), [0, "0"]) === true);
console.log(setsMatch(findAll("42", values), [42, "42"]) === true);
console.log(setsMatch(findAll("42hello", values), ["42hello"]) === true);
console.log(setsMatch(findAll("true", values), ["true"]) === true);
console.log(setsMatch(findAll(true, values), [true]) === true);
console.log(setsMatch(findAll(false, values), [false]) === true);
console.log(setsMatch(findAll(myObj, values), [myObj]) === true);

console.log(setsMatch(findAll(null, values), [null, 0]) === false);
console.log(setsMatch(findAll(undefined, values), [NaN, 0]) === false);
console.log(setsMatch(findAll(0, values), [0, -0]) === false);
console.log(setsMatch(findAll(42, values), [42, "42hello"]) === false);
console.log(setsMatch(findAll(25, values), [25]) === false);
console.log(
  setsMatch(findAll(Infinity, values), [Infinity, -Infinity]) === false
);
console.log(setsMatch(findAll("", values), ["", 0]) === false);
console.log(setsMatch(findAll("false", values), [false]) === false);
console.log(setsMatch(findAll(true, values), [true, "true"]) === false);
console.log(setsMatch(findAll(true, values), [true, 1]) === false);
console.log(setsMatch(findAll(false, values), [false, 0]) === false);

// ***************************

function setsMatch(arr1, arr2) {
  if (
    Array.isArray(arr1) &&
    Array.isArray(arr2) &&
    arr1.length == arr2.length
  ) {
    for (let v of arr1) {
      if (!arr2.includes(v)) return false;
    }
    return true;
  }
  return false;
}
// = = = = = = = = = = = = = = = = = = = = = = =

// = = = = = = = = = = = = = = = = = = = = = = =
// Scope {
// Nested Scope
// Hoisting
// Closure
// Modules
// }

var teacher = "Kyle"; // in big scope

// in big scope
function otherClass() {
  var teacher = "Suzy"; // in other scope
  console.log("Welcome");
}

function ask() {
  // in big scope
  var question = "Why?"; // in other1 scope
  console.log(question);
}

otherClass(); // in big scope
ask(); // in big scope

// = = = = = = = = = = = = = = = = = = = = = = =

// scope
("use strict");
var num = 2;

function newFunction() {
  num = 5;
  say = "React"; //REFERENCE ERROR should be written
  console.log("newFunction was called");
}

newFunction();

console.log(num);

// = = = = = = = = = = = = = = = = = = = = = = = =

var teacher = "Kyle";

function otherClass() {
  var teacher = "Suzy";

  function ask(question) {
    console.log(teacher, question);
  }

  ask("Why?");
}

otherClass(); // Suzy Why?
ask("???"); // should get REFERENCE ERROR

// = = = = = = = = = = = = = = = = = = = = = = = =
// undefined VS undeclared
// undefined - A variable that has not been assigned a value
// undeclared - It occurs when a variable which hasn't been declared using var, let or const is being tried to access

function teacher() {
  /*...*/
}

var myTeacher = function anotherTeacher() {
  console.log(anotherTeacher);
};

console.log(teacher);
console.log(myTeacher);
// console.log(anotherTeacher); //we get REFERENCE ERROR

// = = = = = = = = = = = = = = = = = = = = = = = =
var clickHandler = function () {
  // ...
};

var keyHandler = function keyHandler() {
  // ...
};

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// Arrow function

// var ids = people.map((person) => person.id);

// var ids = people.map(function getId(person) {
//   return person.id;
// });

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =
var teacher1 = "Artur";

function anotherTeacher1() {
  var teacher1 = "Marek";
  console.log(teacher1); // Marek
}

anotherTeacher1(); // Marek

console.log(teacher1); // Artur

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =
var teacher = "Kyle";

(function (teacher) {
  console.log(teacher);
})("Suzy");

console.log(teacher);

// or

var teacher = "Kyle";

(function (teacher) {
  var teacher = "Suzy";
  console.log(teacher);
})();

console.log(teacher);

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// var teacherr;
// try {
//   return fetchTeacher(1);
// } catch (err) {
//   teacherr = "Kyle";
// }

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// Block scoping

// Instead of an IIFE, we can use block scope declaration
var teacher = "Kyle";

{
  let teacher = "Suzy";
  console.log(teacher); // Suzy
}
console.log(teacher); // Kyle

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =
function diff(x, y) {
  if (x > y) {
    let tmp = x;
    x = y;
    y = tmp;
  }

  return y - x;
}
console.log(diff(4, 5));

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =
var person = "Adam";
person = "Ali"; // ok

const person2 = person;
// person2 = "Umar"; // TypeError;

const newArr = [1, 2, 3, 4, 5];
newArr[0] = 8; // Allowed
// then newArr = [8, 2, 3, 4, 5];

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// Hoisting

var student;
var teacher;

student; // undefined
teacher; // undefined

student = "you";
teacher = "Kyle";

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// var hoisting?
// ussualy bad:
teacher = "Kyle";
var teacher;

// function hoisting?
// IMO actually pretty useful
getTeacher(); // Kyle

function getTeacher() {
  return teacher;
}

// let does not hoist?
// {
//   teacher = "Kyle"; // TDZ error!
//   let teacher;
// }

// var teacher = "Kyle";
// {
//   console.log(teacher); // TDZ error!
//   let teacher = "Suzy";
// }

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// Closure

function askQuestion(question) {
  setTimeout(function wait10Sec() {
    console.log(question);
  }, 10000);
}

askQuestion("What is closure?");

var teacher = "Kyle";

var myTeacher = function () {
  console.log(teacher);
};

teacher = "Suzy";

myTeacher();

// = = = = =
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(`i: ${i}`);
  }, i * 1000);
}
// i: 4
// i: 4
// i: 4

// if we use let , then we would get 1, 2, 3.

// = = = = = = = = = = = = = = = = = = = = = = = = = = =
// Module Pattern

var workshop = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher, question);
  },
};

workshop.ask("Is this a module?"); // Kyle Is this a module?

// = = = = = = = = = = = = = = = = = = = = = = = = = = =

var workshop = (function Module(teacher) {
  var publicAPI = { ask };
  return publicAPI;

  // ***********

  function ask(question) {
    console.log(teacher, question);
  }
})("Kyle");

workshop.ask("Is this a module?"); // Kyle Is this a module?

// = = = = = = = = = = = = = = = = = = = = = = = = = = =
// Objects (Oriented)

// this
// class()
// Prototypes
// "Inheritance" vs "Behaviour Delegation"
// (OO vs OLOO );

// = = = = = = = = = = = = = = = = = = = = = = = = = = =
// THIS

function ask(question) {
  console.log(this.teacher, question);
}

function otherClass() {
  var myContext = {
    teacher: "Suzy",
  };
  ask.call(myContext, "Why?"); // Suzy Why?
}

otherClass();

// = = = = = = = = = = = = = = = = = = = = = = = = = = =
// this: dynamic binding -> sharing

function ask(question) {
  console.log(this.teacher, question);
}

var workshop1 = {
  teacher: "Kyle",
  ask: ask,
};

var workshop2 = {
  teacher: "Suzy",
  ask: ask,
};

workshop1.ask("How do I share a method?");
// Kyle How do I share a method?

workshop2.ask("How do I share a method?");
// Suzy How do I share a method?

// = = = = = = = = = = = = = = = = = = = = = = = = = = =
// this: explicit binding

function ask(question) {
  console.log(this.teacher, question);
}

var workshop1 = {
  teacher: "Kyle",
};

var workshop2 = {
  teacher: "Suzy",
};

ask.call(workshop1, "Can I explicitly set context?");
// Kyle Can I explicitly set context?

ask.call(workshop2, "Can I explicitly set context?");
// Suzy Can I explicitly set context?

// = = = = = = = = = = = = = = = = = = = = = = = = = = =
// Constructor calls

function ask(question) {
  console.log(this.teacher, question);
}

var newEmptyObject = new ask("What is 'new' doing here?");
// undefined What is 'new' doing here?

// = = = = = = = = = = = = = = = = = = = = = = = = = = =

// (function repeat() {
//   eat();
//   sleep();
//   code();
//   repeat();
// })();

// = = = = = = = = = = = = = = = = = = = = = = = = = = =

function greet() {
  console.log("Hello, " + this.name);
}

var person = {
  name: "John",
  greet: greet,
};

person.greet(); // Outputs "Hello, John"

var calculator = {
  operand1: 5,
  operand2: 10,
  sum: function () {
    return this.operand1 + this.operand2;
  },
};

console.log(calculator.sum()); // Outputs 15

// method -> object
// function -> global (window, global)

// const video = {
//   title: "a",
//   play() {
//     console.log(this);
//   },
// };

// video.stop = function () {
//   console.log(this);
// };

// video.stop();

const video = {
  title: "b",
  tags: ["a", "b", "c", "d", "e", "f"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this);
  },
};

video.showTags();

// = = = = = = = = = = = = = = = = = = = = = =
class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  drive() {
    console.log("You drive the car!");
  }
  brake() {
    console.log("You step on the brakes!");
  }
}
let car1 = new Car("Ford", "Mustang", 2022, "red");
let car2 = new Car("Chevy", "Corvette", 2021, "blue");

console.log(car1.model);
