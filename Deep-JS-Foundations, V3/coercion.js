console.log(null == 0); // false, null and 0 have different types, so they are not considered equal.
console.log(null == undefined); // true, they are both special values that represent the absence of a value, so they are considered equal despite having different types.
console.log(null == "null"); // false, null and the string "null" are not equal because they have different types.
console.log(null == true); // false, null and the boolean value true are not equal because they have different types.
console.log(null == [null]); // false, In JavaScript, when using the equality operator (==), type coercion is performed on both sides of the operator. In this case, null on the left side is coerced to 0, but the array [null] on the right side is coerced to a string, which becomes "null".
console.log(null == 10); // false, null and the number 10 are not equal because they have different types.
console.log(null == {}); // false, null and the empty object {} are not equal because they have different types.
console.log(null == []); // false, null and the empty array [] are not equal because they have different types. This is a tricky case because you might expect them to be equal, but the == operator performs type coercion, treating the empty array as an object.
console.log(null == ""); // false, null and the empty string "" are not equal. The equality operator coerces null to 0 and the empty string to 0 as well. However, they are not strictly equal because null represents the absence of a value, while "" is an empty string.
