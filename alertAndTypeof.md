## alert()
![Group-474](https://github.com/saidali-ibn-zafar/Deep-JS-Foundations-V3/assets/120341849/9388632e-086e-4aca-a21c-02c7b40a702d)

-----

Most of the time, operators and functions automatically convert the values given to them to the right type.

For example, `alert` automatically converts any value to a string to show it. Mathematical operations convert values to numbers.

### String Conversion

String conversion happens when we need the string form of a value.

For example, `alert(value)` does it to show the value.

We can also call the `String(value)` function to convert a value to a string:

```js
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string
```

----- 

### Numeric Conversion

Numeric conversion in mathematical functions and expressions happens automatically.

For example, when division / is applied to non-numbers:

```js
alert( "6" / "2" ); // 3, strings are converted to numbers
```

```js
let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number
```

Explicit conversion is usually required when we read a value from a string-based source like a text form but expect a number to be entered.

If the string is not a valid number, the result of such a conversion is NaN. For instance:

```js
let age = Number("an arbitrary string instead of a number");

alert(age); // NaN, conversion failed
```

-----
# In Progress...
