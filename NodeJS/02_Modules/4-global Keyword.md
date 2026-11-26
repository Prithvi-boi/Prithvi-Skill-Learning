
# Global in Node.js (CommonJS & ESM)

## 1. What is Global?

A **global variable** is a variable that can be accessed from different parts of a program without importing or passing it explicitly.

In Node.js, the global object is used to store values that are accessible across different modules.

Node.js provides:
- `global` → Global object in Node.js.
- `globalThis` → Standard JavaScript way to access the global object.

> <span style="color:orange">Important:</span> Variables declared at the top level of a file are not automatically global in Node.js. Each module has its own scope.

---

## 2. Global in CommonJS (CJS)

In CommonJS, each file is wrapped inside a function by Node.js. Therefore, variables declared using `var`, `let`, or `const` at the top level are limited to that module.

### Example

```js
// app.js

var name = "Prithvi";
let age = 20;

console.log(name);        // Prithvi
console.log(global.name); // undefined
```

Even though `name` is declared at the top level, it is not a property of the global object.

### Making a Variable Global

We can explicitly attach a variable to the `global` object.

```js
// app.js

global.name = "Prithvi";

console.log(global.name); // Prithvi
```

Now `name` is attached to the global object and can be accessed from other modules.

### Accessing it from another file

```js
// test.js

console.log(global.name); // Prithvi
```

Since `name` is attached to the global object, we can access it without importing it.

---

## 3. Global in ESM (ES Modules)

ES Modules also have their own module scope.

Variables declared using `var`, `let`, or `const` at the top level are not automatically global.

### Example

```js
// app.js

const name = "Prithvi";

console.log(name);              // Prithvi
console.log(globalThis.name);   // undefined
```

Here, `name` is limited to the current module.

### Making a Variable Global

In ESM, we can use `globalThis` to attach values to the global object.

```js
// app.js

globalThis.name = "Prithvi";

console.log(globalThis.name); // Prithvi
```

Now the value can be accessed from other modules without importing it.

### Accessing it from another file

```js
// test.js

console.log(globalThis.name); // Prithvi
```

---

## 4. `global` vs `globalThis`

| `global` | `globalThis` |
|---|---|
| Node.js global object | Standard JavaScript global object |
| Mainly used in Node.js | Works across JavaScript environments |
| Node-specific name | Cross-platform standard |
| `global.name = "Prithvi"` | `globalThis.name = "Prithvi"` |

In Node.js, both `global` and `globalThis` refer to the same global object.

```js
console.log(global === globalThis); // true
```

---

## 5. CommonJS vs ESM

| Feature | CommonJS | ESM |
|---|---|---|
| Module scope | Yes | Yes |
| Top-level `var` is global? | No | No |
| Top-level `let` is global? | No | No |
| Top-level `const` is global? | No | No |
| Explicit global assignment | `global.x = 10` | `globalThis.x = 10` |
| Global object | `global` | `globalThis` |

---

## 6. Important Highlights

> <span style="color:green">**Top-level variables are module-scoped.**</span>

Declaring a variable at the top of a file does not make it globally accessible.

> <span style="color:orange">**Use `globalThis` when you intentionally need global access.**</span>

It is the standard way to access the global object in modern JavaScript.

> <span style="color:red">**Avoid unnecessary global variables.**</span>

Global variables can be modified from anywhere, which can cause unexpected behavior and make debugging harder.

---

## Summary

- CommonJS and ESM both have their own module scope.
- Top-level variables are not automatically global.
- `global` is Node.js's global object.
- `globalThis` is the standard way to access the global object.
- We can attach properties to `global` or `globalThis` to make them accessible across modules.
- Avoid using globals unnecessarily.

