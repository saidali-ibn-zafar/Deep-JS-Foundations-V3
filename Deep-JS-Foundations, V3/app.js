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
  var direction = 
  (trendRate < 0 || Object.is(trendRate, -0)) ? "DOWN" : "UP";
    return `${direction} ${Math.abs(trendRate)}`;
}

formatTrend(-3); // "DOWN 3"
formatTrend(3); // "UP 3"
formatTrend(-0); // "DOWN 0"
formatTrend(0);  // "UP 3"

// = = = = = = = = = = = = = = = = = = = = = = =

// = = = = = = = = = = = = = = = = = = = = = = =
