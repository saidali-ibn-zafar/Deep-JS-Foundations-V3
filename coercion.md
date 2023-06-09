# Type Coercion 

![12-07-20-how-type-coercion-in-javascript-works md-blog](https://github.com/saidali-ibn-zafar/Deep-JS-Foundations-V3/assets/120341849/e53805a6-2c45-4926-8665-bc332a3b9321)

-----
- "The process of converting one data type into another is known as `type coercion`."

  Type Coercion can be categorized into two distinct parts: 
    - `Implicit` type coercion
    - `Explicit` type coercion
-----
### Implicit Type Coercion
- Implicit type coercion is a feature of JavaScript that `automatically` converts one data type into another during an operation or comparison.
 
  ```js
  let num = 5;
  let str = "10";

  let result = num + str;

  console.log(result); // Output: "510"

  ```
-----
### Explicit Type Coercion
- Implicit type coercion occurs when the programmer `intentionally` converts a value from one data type to another using `explicit instructions` or `functions` provided by the programming language.
 
  ```js
  let num = 5;
  let str = "10";

  let result = num + Number(str);

  console.log(result); // Output: 15

  ```
- #### Built-in methods:
  - `String()`, 
  - `Number()`,
  - `Boolean()`,
  - `parseInt()`,
  - `parseFloat()`,
  - `toString()`, 
  - `toFixed()`,
  -  and so on...
-----
### Type Comparison
- "In JavaScript, type comparison refers to the process of comparing the equality or inequality of values while considering their data types using comparison operators."

  - Comparison operators:

      |          |          |
      |----------|----------|
      | >   greater than | ==  equal to   | 
      | <   less than | !=  not equal to    | 
      | >=   greater than or equal | ===  strict equal to   | 
      | <=   less than or equal | !==  strict not equal to   | 


-----
### For more: 
  - [Practice](https://github.com/saidali-ibn-zafar/Deep-JS-Foundations-V3/blob/main/Deep-JS-Foundations%2C%20V3/coercion.js)
