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

/ = = = = = = = = = = = = = = = = = = = = = = =
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

 
{ 
  let x = 2;
}
// x can NOT be used here


{ 
  var x = 2; 
}
// x CAN be used here

// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName

myFunction();

// code here can use carName 

function myFunction() {
  carName = "Volvo";
}
