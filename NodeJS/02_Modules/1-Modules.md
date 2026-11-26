
# Modules in Node.js

<a href="https://www.youtube.com/watch?v=FSRo41TaHFU&list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo&index=4">
  <img src="https://img.youtube.com/vi/FSRo41TaHFU/hqdefault.jpg" width="400">
</a>

## 1. What are Modules?

A module is a reusable piece of code that can be separated into its own file and used in other files.

Instead of writing all our code in a single file, we can divide it into multiple files, making our code:

- Easier to manage
- Reusable
- Easier to debug
- More organized

For example, we can create a module for mathematical operations and import it wherever we need.

---

## 2. Creating a Module

In Node.js, every file can be treated as a separate module.

Let's create two files:

```text
project/
├── math.js
└── app.js
```

### math.js

```js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Exporting functions
module.exports = { add, subtract };
```

### What is `module.exports`?

- `module.exports` is used to export values (functions, variables, objects, etc.) from a file.
- It allows other files to access and use the exported code.
- Without exporting, other files cannot directly access the functions defined inside this module.

---

## 3. Importing a Module

To use the exported functions, we import them into another file using `require()`.

### app.js

```js
const math = require('./math');

console.log(math.add(10, 5));
console.log(math.subtract(10, 5));
```

**Output:**

```text
15
5
```

### Understanding `require()`

- `require()` is used to load a module into the current file.
- `./math` means we are importing a module from the current directory.
- Node.js automatically looks for the appropriate file, such as `math.js`.
- `require()` returns whatever the module has exported using `module.exports`.

We can access the imported functions using `math.add()` and `math.subtract()`.

---

## 4. Importing Specific Functions

Instead of importing the entire exported object under a single variable, we can destructure the functions directly.

```js
const { add, subtract } = require('./math');

console.log(add(10, 5));
console.log(subtract(10, 5));
```

This allows us to directly call `add()` and `subtract()` without using `math.` before them.

---

## 5. Exporting a Single Function

A module can also export just one function instead of multiple functions.

### greet.js

```js
function greet(name) {
    return `Hello, ${name}!`;
}

module.exports = greet;
```

### app.js

```js
const greet = require('./greet');

console.log(greet('Prithvi'));
```

**Output:**

```text
Hello, Prithvi!
```

Since we exported a single function directly, we can call it immediately after importing.

---

## 6. Important Syntax

| Syntax | Meaning |
|---|---|
| `module.exports` | Exports values from a module |
| `require()` | Imports a module |
| `./file` | Refers to a file in the current directory |
| `../file` | Refers to a file in the parent directory |
| `./folder/file` | Refers to a file inside a subfolder |

---

## 7. Summary

- Modules allow us to divide our code into separate, reusable files.
- `module.exports` is used to export code from a module.
- `require()` is used to import exported code into another file.
- We can export multiple functions together or export a single function.
- We can use destructuring to import specific functions directly.

> Modules help us write cleaner, reusable and maintainable code by separating responsibilities across different files.

For now, we are using the **CommonJS module system** (`module.exports` and `require()`), which is the traditional module system in Node.js.
