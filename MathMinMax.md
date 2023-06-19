## Math.min() and Math.max()
-----

![image](https://github.com/saidali-ibn-zafar/saidali-ibn-zafar/assets/120341849/a56881df-b031-4bd7-99d7-90c09e86ad17)

-----

## Read till the end!

### Math.min():

Usage: Math.min(value1, value2, ..., valueN)

Definition: The Math.min() function returns the smallest value among the given arguments.

#### Example: 
```js
let smallest = Math.min(5, 10, 3, 8, 2);
console.log(smallest); // Output: 2

```
-----

### Math.max():

Usage: Math.max(value1, value2, ..., valueN)

Definition: The Math.max() function returns the largest value among the given arguments.

#### Example: 
```js
let largest = Math.max(5, 10, 3, 8, 2);
console.log(largest); // Output: 10

```
------

"`Math.min()` and `Math.max()` are functions in JavaScript used to find the minimum and maximum values from a set of numbers. When these functions are called without any arguments, they have default behaviors.

`Math.min()` returns positive infinity (`Infinity`) as a default value. Positive infinity represents the largest possible numeric value. It is used when there are no finite values to compare. So, if you call Math.min() without any numbers, it will return Infinity.

`Math.max()`, on the other hand, returns negative infinity (`-Infinity`) as a default value. Negative infinity represents the smallest possible numeric value. It is used when there are no finite values to compare. Therefore, if you call `Math.max()` without any numbers, it will return -Infinity.

These default values ensure that subsequent comparisons with finite numbers will always yield the expected results. By returning `Infinity` and `-Infinity`, the functions indicate that there is no finite minimum or maximum value among the arguments.

Remember, these default behaviors are specific to the `Math.min()` and `Math.max()` functions in JavaScript and have been chosen by the language designers to handle such scenarios consistently."

#### Take a look at this: 
```js
console.log(Math.min()); // Infinity
console.log(Math.max()); // -Infinity

console.log(Math.min() < Math.max()); // false
console.log(Math.min() > Math.max()); //  true
```
