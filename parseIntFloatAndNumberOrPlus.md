# parseInt/Float and Number()
-----

![parseInfFloatNumber](https://github.com/saidali-ibn-zafar/Deep-JS-Foundations-V3/assets/120341849/a8316f9f-ae53-44b5-bf26-4499e2e59724)

-----

### parseInt()
-  `parseInt()` in JavaScript is a built-in function that takes a string as input and tries to convert it into an integer by extracting and converting numerical digits from the start of the string until it encounters a non-digit character.

#### Example: 
```js
let mixed = "123abc456";
let parsedNumber = parseInt(mixed);

console.log(parsedNumber); // Output: 123
console.log(typeof parsedNumber); // Output: "number"
```

-----

### parseFloat()
- `parseFloat()` in JavaScript is also a built-in function that takes a string as input and tries to convert it into a floating-point number (a number with decimal places) by extracting and converting numerical digits from the start of the string until it encounters a non-digit character.

#### Example: 
```js
let mixed = "123.45abc";
let parsedNumber = parseFloat(mixed);

console.log(parsedNumber); // Output: 123.45
console.log(typeof parsedNumber); // Output: "number"

```

-----

### Number()
- In JavaScript, the `Number()` function is a built-in function that can be used to convert a value into a number. It can handle various types of inputs, such as strings, booleans, and numeric values.

#### Example: 
```js
let someNumericText = "123.456";

console.log(Number(someNumericText));  // Output: 123.456
console.log(+someNumericText);         // Output: 123.456

console.log(Number("512px"));         // Output: NaN
console.log(+"512px");                // Output: NaN

```

### Summary
- In the code above we can see the difference between `Number()` and `parseInt()`, that is to say, when we have value like - "111saidali", we have to use `parseInt()` to get the number, if we use `Number()` instead of `parseInt()`, we would get `NaN` in this case.

----- 

### For more: 
  - [Practice](https://github.com/saidali-ibn-zafar/Deep-JS-Foundations-V3/blob/main/Deep-JS-Foundations%2C%20V3/parseIntFloat.js)
