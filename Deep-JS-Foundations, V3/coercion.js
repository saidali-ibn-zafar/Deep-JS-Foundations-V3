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

// - - - - - - - - - - - -
// practice

console.log("5" + 2); // 52
console.log(null == undefined); // true
console.log(false == 0); // true
console.log("" == false); // true
console.log(Number("10") + 5); // 15
console.log(Boolean(0)); // false
console.log([] + []); // ""

// - - - - -
console.log({} + []); // [object Object]
// The left operand {} is an empty object. To perform coercion, JavaScript attempts to convert it to a string.
// When an object is converted to a string, it uses the toString() method of the object. In this case, the toString() method is called on the empty object {}, resulting in the string "[object Object]".
// AND when we convert empty array to string it is "", so "[object Object]" + "" = [object Object]

// - - - - -

// - - - - -
console.log([] == ![]); // true
// The right operand ![] is evaluated first. The ! operator coerces the empty array [] to its boolean equivalent, which is true. Applying the negation (!) operator to true results in false. So, ![] evaluates to false.
// When an array is coerced to a primitive value, it is first converted to a string representation. The empty array [] converts to an empty string "".
// then The expression becomes "" == false. Now, JavaScript performs coercion to a common type, which is numeric in this case.
// FINALLY: 0 == 0 // true

// - - - - -
console.log(NaN === NaN); // false
console.log(typeof typeof 1);
console.log(0 || "hello");

// - - - - -
console.log(NaN || "hello"); // hello
// In JavaScript, the logical OR (||) operator performs coercion when evaluating its operands. It follows these rules:
//
// If the left operand is truthy, the operator returns the value of the left operand.
// If the left operand is falsy, the operator returns the value of the right operand.
// In this case, NaN is considered a falsy value. When the expression is evaluated, JavaScript performs coercion and evaluates the left operand (NaN). Since NaN is falsy, the || operator moves on to evaluate the right operand ("hello"). Since "hello" is a non-empty string and therefore truthy, the operator returns the value of the right operand, which is "hello".

// - - - - -
// How can you convert a value to a boolean using coercion in JavaScript?
var value = "Hello";
var booleanValue = !value;

console.log(booleanValue); // Output: false

// To convert a value to a boolean using coercion in JavaScript, you can use the logical NOT (!) operator. The ! operator coerces the operand to a boolean value by following these rules:

// If the operand is truthy (i.e., it evaluates to true in a boolean context), the ! operator will return false.
// If the operand is falsy (i.e., it evaluates to false in a boolean context), the ! operator will return true.

// - - - - -

// When using the strict inequality operator (!==) in JavaScript, coercion does not occur. The strict inequality operator compares both the value and the type of the operands.
console.log(5 !== "5"); // true
// In the above example, the operands 5 and "5" have different types (number and string, respectively), so the strict inequality operator returns true because the operands are not equal in both value and type.

// If we were to use the loose inequality operator (!=), coercion would occur, and the result would be different:
console.log(5 != "5"); // false

// In this case, the loose inequality operator performs coercion, converting the string "5" to a number before the comparison. Since both operands have the same numerical value of 5, the loose inequality operator returns false.
