![Function+Expressions+and+Declarations](https://github.com/saidali-ibn-zafar/Deep-JS-Foundations-V3/assets/120341849/3e9e382b-0601-4040-824d-352dc7676910)

## Function Declaration: 
-  It starts with the keyword `"function"` followed by the function name and a set of parentheses for parameters (if any). The function body contains the code to be executed when the function is called. Function declarations are hoisted, meaning they can be called before they are defined in the code.

----- 

## function Expression: 
- A function expression in JavaScript is an alternative way to define a function by assigning it to a variable or a constant. It involves creating an `anonymous` function (a function without a name) and assigning it to a `variable` or a `constant`.

----- 

## One more thing: 

```js
let f = () => {};
console.log(f()); // Output: undefined
```

- The arrow function `() => {}` does not have a return statement, it does not explicitly return a value. In JavaScript, when a function does not have a return statement, it implicitly returns undefined.
- The function `f` is executed, but it does not produce any specific value, so the result is `undefined`.

----- 

### For more: 
[Practice->](https://github.com/saidali-ibn-zafar/Deep-JS-Foundations-V3/blob/main/Deep-JS-Foundations%2C%20V3/functionDecExpAndNoValue.js)
