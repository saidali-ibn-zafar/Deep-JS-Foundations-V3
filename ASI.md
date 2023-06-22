## Automatic Semicolon Insertion (ASI) mechanism

![asi](https://github.com/saidali-ibn-zafar/Deep-JS-Foundations-V3/assets/120341849/3ca0eb72-f7b4-435d-a2b2-a09fea0e2413)

----- 

At first glance, both functions `getUser1()` and `getUser2()` appear similar, intending to return an object with the `name` property set to `"Saidali"`. However, there is a crucial difference that impacts the behavior of `getUser2()`.

In `getUser2()`, a line break appears immediately after the return statement:

Due to `JavaScript's Automatic Semicolon Insertion (ASI) mechanism`, a semicolon is automatically inserted after the return statement, treating it as a complete statement on its own. As a result, the subsequent object block is treated as a separate code block and is not associated with the return statement.

Therefore, the return statement in `getUser2()` effectively returns nothing, resulting in the value `undefined`. The object block following the return statement is not executed or processed.

You can copy here: 
```js
// getUser1
function getUser1() {
  return {
    name: "Saidali",
  };
}

// getUser2
function getUser2() {
  return
  {
    name: "Saidali";
  }
}

```

[GO BACK](README.md)
