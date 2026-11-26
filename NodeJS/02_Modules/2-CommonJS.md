# CommonJS in Node.js

## 1. What is CommonJS?

CommonJS is a module system used by Node.js to organize code into separate files and share functionality between them.

It allows us to:
- Export code from one file.
- Import code into another file.
- Reuse functions, variables, objects, and classes across files.

CommonJS uses `require()` to import modules and `module.exports` to export them.

---

## 2. Exporting with `module.exports`

We use `module.exports` to make code available outside the current file.

### math.js

```js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = { add, subtract };
```

### Using only exports

```js
function greet() {
    console.log("Hello!");
}

exports.greet = greet;
```

## 3. Importing with require()
We use require() to import the exported code from another file.
app.js

```js
const math = require('./math');

console.log(math.add(10, 5));
console.log(math.subtract(10, 5));
```
