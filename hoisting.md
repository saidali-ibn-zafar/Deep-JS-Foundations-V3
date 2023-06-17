# Hoisting 

![hoisting](https://github.com/saidali-ibn-zafar/Deep-JS-Foundations-V3/assets/120341849/78889ab6-dae5-48f8-9581-a8e965e5e3e5)

-----
- "In JavaScript, `hoisting` is behavior where we can use variables and functions before they are declared in our code."

  However, it's important to note that `only the declarations` are hoisted, `not the initializations`. If you initialize a variable after using it, the value will be `undefined` until the assignment statement is executed.
-----
### Here are a few examples to illustrate hoisting:
- Variable Hoisting:
 
  ```js
  console.log(myVariable); // undefined
  var myVariable = 10;  
  console.log(myVariable); // 10
  
  ```

- Function Hoisting:
  ```js
  sayHello(); // "Hello"
  function sayHello() 
  {
    console.log("Hello");
  }
  ```
  
- Function Expression Hoisting:
  ```js
  sayHello(); // TypeError: sayHello is not a function
  var sayHello = function() {
  console.log("Hello");
  };

  ```
-----
  
- # TDZ (Temporal Dead Zone)
  
![tdz](https://github.com/saidali-ibn-zafar/Deep-JS-Foundations-V3/assets/120341849/1325b847-52a9-406b-acdb-8f40b117f1cd)

-----
- The TDZ (`Temporal Dead Zone`) error occurs when we try to access or use variables declared with `let` and `const` before they are formally declared or initialized. In other words, we cannot access these variables before their `declaration` or `initialization` in our code, or we will encounter a `TDZ` error.

### Here's an example to illustrate hoisting with let and const:

- Example 1:
  
  ```js
  console.log(myVariable); // ReferenceError: Cannot access 'myVariable' before initialization
  const myVariable = 10;

  ```
  
- Example 2:
  
  ```js
  function example() {
  if (true) {
    console.log(myVariable); // ReferenceError: Cannot access 'myVariable' before initialization
    let myVariable = 20;
   }
  }
  example();

  ```
  
- Example 3:
  
  ```js
  function example(param = myVariable) { // ReferenceError: Cannot access 'myVariable' before initialization
  let myVariable = 30;
  console.log(param);
  }
  example();
  ```
  
  

### For more: 
  - [Practice](https://github.com/saidali-ibn-zafar/Deep-JS-Foundations-V3/blob/main/Deep-JS-Foundations%2C%20V3/hoisting.js)
