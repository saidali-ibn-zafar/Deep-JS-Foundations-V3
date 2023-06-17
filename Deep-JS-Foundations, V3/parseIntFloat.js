// Int
console.log(parseInt("42px")); // Output: 42
// The string "42px" starts with a numeric value "42". parseInt() parses the numeric part until it encounters a non-numeric character, resulting in 42.

console.log(parseInt("3.14")); // Output: 3
// The string "3.14" starts with a numeric value "3". parseInt() stops parsing at the decimal point ".", returning the whole number part, which is 3.

console.log(parseInt("10", 2)); // Output: 2
// The string "10" is parsed as a binary number because the second argument specifies the radix as 2. Therefore, it is parsed as the decimal value 2.

console.log(parseInt("0x1F")); // Output: 31
// The string "0x1F" starts with "0x", indicating a hexadecimal number. parseInt() parses the numeric part after "0x" and returns the decimal value 31.

console.log(parseInt("NaN")); // Output: NaN
// The string "NaN" is not a valid number, so parseInt() returns NaN (Not a Number).

console.log(parseInt("007")); // Output: 7
// The string "007" starts with leading zeros, but they are ignored by parseInt(). It returns the parsed numeric value 7.

console.log(parseInt("000123")); // Output: 123
// The string "000123" starts with leading zeros, which are ignored by parseInt(). It returns the parsed numeric value 123.

console.log(parseInt("000")); // Output: 0
// The string "000" contains only leading zeros, and parseInt() returns 0.

console.log(parseInt("010")); // Output: 10
// The string "010" is interpreted as a decimal number, not octal. Therefore, parseInt() returns the decimal value 10.

console.log(parseInt("0123")); // Output: 83
// The string "0123" starts with a leading zero, indicating an octal number. parseInt() parses it as octal and returns the decimal value 83.

console.log(parseInt("42 years old")); // Output: 42
// The string "42 years old" starts with the numeric value "42". parseInt() parses the numeric part until it encounters a non-numeric character, resulting in 42.

console.log(parseInt("3.14 is a number")); // Output: 3
// The string "3.14 is a number" starts with the numeric value "3". parseInt() stops parsing at the decimal point ".", returning the whole number part, which is 3.

console.log(parseInt("There are 10 apples")); // Output: NaN
// The string "There are 10 apples" does not start with a valid numeric value, so parseInt() returns NaN (Not a Number).

console.log(parseInt("007 James Bond")); // Output: 7
// The string "007 James Bond" starts with leading zeros, but they are ignored by parseInt(). It returns the parsed numeric value 7.

console.log(parseInt("The answer is 42")); // Output: NaN
// The string "The answer is 42" does not start with a valid numeric value, so parseInt() returns NaN.

// Float
console.log(parseFloat("3.14")); // Output: 3.14
// The string "3.14" is successfully parsed as a floating-point number, resulting in 3.14.

console.log(parseFloat("10.5 is the answer")); // Output: 10.5
// The string "10.5 is the answer" is parsed until the non-numeric character is encountered, resulting in 10.5.

console.log(parseFloat("The price is $12.99")); // Output: NaN
// The string "The price is $12.99" does not start with a valid floating-point number, resulting in NaN.

console.log(parseFloat("0.007")); // Output: 0.007
// The string "0.007" is successfully parsed as a floating-point number, resulting in 0.007.

console.log(parseFloat("Pi is approximately 3.14")); // Output: NaN
// The string "Pi is approximately 3.14" does not start with a valid floating-point number, resulting in NaN.

console.log(parseFloat("Infinity")); // Output: Infinity
// The string "Infinity" is a special value representing positive infinity and is parsed as Infinity.

console.log(parseFloat("-Infinity")); // Output: -Infinity
// The string "-Infinity" is a special value representing negative infinity and is parsed as -Infinity.

console.log(parseFloat("NaN")); // Output: NaN
// The string "NaN" is a special value representing "Not a Number" and is parsed as NaN.

console.log(parseFloat("")); // Output: NaN
// An empty string is not a valid floating-point number, resulting in NaN.

