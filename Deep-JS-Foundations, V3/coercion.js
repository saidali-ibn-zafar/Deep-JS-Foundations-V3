// COERCION AND COMPARISON

// 0 == ?
console.log(0 == ""); // true, the equality operator (==) performs type coercion, converting the empty string "" to a numeric value of 0 before the comparison. As a result, 0 is considered equal to the converted 0.
console.log(0 == false); // true, the false value is coerced to a numeric value of 0 before the comparison, resulting in equality.
console.log(0 == []); // true, the empty array [] is coerced to a numeric value of 0 before the comparison, resulting in equality.
console.log(0 == null); // false, the null value is not coerced to a numeric value, and since 0 is a numeric value, they are considered different types and not equal.
console.log(0 == "0"); // true, The string "0" is coerced to a numeric value of 0 before the comparison, resulting in equality.
console.log(0 == "false"); // false, The string "false" is coerced to a numeric value of NaN (Not-a-Number) before the comparison. Since NaN is not equal to 0, the result is false.
console.log(0 == {}); // false, objects are not automatically coerced to numeric values, so the comparison between 0 and an object results in false.
console.log(0 == [0]); // true, the array [0] is coerced to a string value "0" before the comparison. The string "0" is then coerced to a numeric value of 0, resulting in equality.
console.log(0 == undefined); // false, the undefined value is not coerced to a numeric value, and since 0 is a numeric value, they are considered different types and not equal.
console.log(0 == [1, 2, 3]); // false,  the array [1, 2, 3] is coerced to a string value of "1,2,3" before the comparison, and then the string "1,2,3" is coerced to a numeric value of NaN. However, when NaN is compared to 0, the result is false. So, the result is actually a bit counterintuitive.

// with strict equality ===
// In each case, the strict equality operator compares the values on both sides without any coercion. Since the types of the operands differ, the result is false for all the comparisons.
console.log(0 === ""); // false
console.log(0 === false); // false
console.log(0 === []); // false
console.log(0 === null); // false
console.log(0 === "0"); // false
console.log(0 === "false"); // false
console.log(0 === {}); // false
console.log(0 === [0]); // false
console.log(0 === undefined); // false
console.log(0 === [1, 2, 3]); // false

// null == ?
console.log(null == 0); // false, null and 0 have different types, so they are not considered equal.
console.log(null == undefined); // true, they are both special values that represent the absence of a value, so they are considered equal despite having different types.
console.log(null == "null"); // false, null and the string "null" are not equal because they have different types.
console.log(null == true); // false, null and the boolean value true are not equal because they have different types.
console.log(null == [null]); // false, In JavaScript, when using the equality operator (==), type coercion is performed on both sides of the operator. In this case, null on the left side is coerced to 0, but the array [null] on the right side is coerced to a string, which becomes "null".
console.log(null == 10); // false, null and the number 10 are not equal because they have different types.
console.log(null == {}); // false, null and the empty object {} are not equal because they have different types.
console.log(null == []); // false, null and the empty array [] are not equal because they have different types. This is a tricky case because you might expect them to be equal, but the == operator performs type coercion, treating the empty array as an object.
console.log(null == ""); // false, null and the empty string "" are not equal. The equality operator coerces null to 0 and the empty string to 0 as well. However, they are not strictly equal because null represents the absence of a value, while "" is an empty string.
console.log(null == null); // true, null is a unique value in JavaScript that represents the absence of an object value. When comparing null with null, the result is true because they have the same type and value.

// with strict equality ===
console.log(null === null); // true
// In each case, the strict equality operator compares the values on both sides without any coercion. Since the types of the operands differ, the result is false for all the comparisons.
console.log(null === 0); // false
console.log(null === undefined); // false
console.log(null === "null"); // false
console.log(null === true); // false
console.log(null === [null]); // false
console.log(null === 10); // false
console.log(null === {}); // false
console.log(null === []); // false
console.log(null === ""); // false

console.log(null == undefined);          
// Output: true
// Explanation: In JavaScript, the `null` value represents the intentional absence of any object value, while `undefined` represents the absence of any assigned value. When using the equality (==) operator, `null` and `undefined` are considered equal because they both represent the absence of a meaningful value.

console.log(null === undefined);         
// Output: false
// Explanation: The strict equality (===) operator requires both the value and the type to be the same. Since `null` and `undefined` have different types, the comparison evaluates to false.

console.log(null > 0);                   
// Output: false
// Explanation: In numeric comparisons, `null` is coerced to 0. Since 0 is not greater than 0, the comparison evaluates to false.

console.log(null < 0);                   
// Output: false
// Explanation: In numeric comparisons, `null` is coerced to 0. Since 0 is not less than 0, the comparison evaluates to false.

console.log(null >= 0);                  
// Output: true
// Explanation: In numeric comparisons, `null` is coerced to 0. Since 0 is equal to 0, the comparison evaluates to true.

console.log(null <= 0);                  
// Output: true
// Explanation: In numeric comparisons, `null` is coerced to 0. Since 0 is equal to 0, the comparison evaluates to true.

console.log(null == 0);                  
// Output: false
// Explanation: `null` and 0 are not equal when using the equality (==) operator because `null` represents the absence of a meaningful value, while 0 is a specific numeric value.

console.log(null === 0);                 
// Output: false
// Explanation: The strict equality (===) operator requires both the value and the type to be the same. Since `null` and 0 have different types, the comparison evaluates to false.

console.log(null == false);              
// Output: false
// Explanation: `null` and `false` are not equal when using the equality (==) operator because they represent different concepts. `null` represents the absence of a meaningful value, while `false` represents a specific boolean value.

console.log(null === false);             
// Output: false
// Explanation: The strict equality (===) operator requires both the value and the type to be the same. Since `null` and `false` have different types, the comparison evaluates to false.

console.log(null == "");                 
// Output: false
// Explanation: `null` and an empty string are not equal when using the equality (==) operator because they represent different concepts. `null` represents the absence of a meaningful value, while an empty string represents an empty sequence of characters.

console.log(null === "");                
// Output: false
// Explanation: The strict equality (===) operator requires both the value and the type to be the same. Since `null` and an empty string have different types, the comparison evaluates to false.

console.log(null == []);                 
// Output: false
// Explanation: `null` and an empty array are not equal when using the equality (==) operator because they represent different concepts. `null` represents the absence of a meaningful value, while an empty array represents a specific data structure.

console.log(null === []);                
// Output: false
// Explanation: The strict equality (===) operator requires both the value and the type to be the same. Since `null` and an empty array have different types, the comparison evaluates to false.


// undefined == ?
console.log(undefined == 0); // false, undefined and 0 have different types, so they are not considered equal.
console.log(undefined == undefined); // true, undefined is strictly equal to itself.
console.log(undefined == "null"); // false, undefined and the string "null" have different types, so they are not considered equal.
console.log(undefined == true); // false, undefined and true have different types, so they are not considered equal.
console.log(undefined == [null]); // false, undefined and the array [null] have different types, so they are not considered equal.
console.log(undefined == 10); // false, undefined and 10 have different types, so they are not considered equal.
console.log(undefined == {}); // false, undefined and the empty object {} have different types, so they are not considered equal.
console.log(undefined == []); // false, undefined and the empty array [] have different types, so they are not considered equal.
console.log(undefined == ""); // false, undefined and the empty string "" have different types, so they are not considered equal.
console.log(undefined == null); // true, undefined and null are both special values that represent the absence of a value, so they are considered equal despite having different types.

// with strict equality ===
// only true undefined === undefined
console.log(undefined === 0); // false
console.log(undefined === undefined); // true
console.log(undefined === "null"); // false
console.log(undefined === true); // false
console.log(undefined === [null]); // false
console.log(undefined === 10); // false
console.log(undefined === {}); // false
console.log(undefined === []); // false
console.log(undefined === ""); // false

// NaN == ? , The comparison NaN == NaN evaluates to false. This is because NaN is considered unequal to any value, including NaN itself.
