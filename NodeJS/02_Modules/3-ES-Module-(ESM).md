
# ES Modules (ESM) in Node.js

## 1. What is ESM?

**ES Modules (ESM)** is the official JavaScript module system that allows us to split our code into separate files and reuse it using `import` and `export`.

It helps us:
- Organize code into separate files.
- Reuse functions, variables, classes, and objects.
- Maintain cleaner and more manageable code.
- Share code between different modules.

ESM uses:
- `export` to make code available to other files.
- `import` to use exported code in other files.

ESM is the modern JavaScript module system, whereas CommonJS uses `require()` and `module.exports`.

---

## 2. Enabling ESM in Node.js

Node.js needs to know whether a file should be treated as CommonJS or ES Modules.

There are two common ways to enable ESM:

### Method 1: Using `package.json`

Add `"type": "module"` to your `package.json`.

```json
{
    "type": "module"
}
```

Now Node.js treats `.js` files in this package as ES Modules.

### Method 2: Using the `.mjs` Extension

Instead of using `.js`, we can use `.mjs` to explicitly identify a file as an ES Module.

```text
app.mjs
math.mjs
```

`.mjs` files are treated as ES Modules regardless of the `"type"` field in `package.json`.

---

## 3. Named Exports

Named exports allow us to export multiple values from a module using their names.

### math.js

```js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}
```

We can use the `export` keyword before declarations to make them available to other files.

### Importing Named Exports

#### app.js

```js
import { add, subtract } from './math.js';

console.log(add(10, 5));
console.log(subtract(10, 5));
```

**Output:**

```text
15
5
```

The names used during import must match the names of the named exports.

---

## 4. Exporting at the End of a File

Instead of exporting while declaring functions, we can export them at the end of the file.

### math.js

```js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

export { add, subtract };
```

We can also rename exports:

```js
export { add as addition, subtract as subtraction };
```

Now, these functions are exported under the names `addition` and `subtraction`.

---

## 5. Default Export

A default export is used when a module has one main value that it wants to export.

A module can have only **one default export**.

### greet.js

```js
function greet(name) {
    return `Hello, ${name}!`;
}

export default greet;
```

### Importing a Default Export

#### app.js

```js
import greet from './greet.js';

console.log(greet('Prithvi'));
```

**Output:**

```text
Hello, Prithvi!
```

Unlike named exports, we don't need curly braces when importing a default export. We can also choose our own name when importing it.

For example:

```js
import greeting from './greet.js';
```

Both `greet` and `greeting` can be used as the import name.

---

## 6. Named vs Default Exports

| Named Export | Default Export |
|---|---|
| Can export multiple values | Only one default export per module |
| Imported using curly braces `{}` | Imported without curly braces |
| Import name must match (unless aliased) | Import name can be chosen freely |
| `export function add() {}` | `export default function greet() {}` |

### Example of Both Together

#### math.js

```js
export function add(a, b) {
    return a + b;
}

export default function multiply(a, b) {
    return a * b;
}
```

#### app.js

```js
import multiply, { add } from './math.js';

console.log(add(2, 3));
console.log(multiply(2, 3));
```

**Output:**

```text
5
6
```

The default export is imported separately, while named exports are placed inside curly braces.

---

## 7. Aliasing Imports

We can rename named imports using the `as` keyword.

```js
import { add as addition } from './math.js';

console.log(addition(10, 5));
```

This allows us to use `addition()` instead of `add()` in the current file.

We can also import all named exports under a single object:

```js
import * as math from './math.js';

console.log(math.add(10, 5));
console.log(math.subtract(10, 5));
```

---

## 8. Importing from Another Folder

We can import modules from different directories using relative paths.

### Folder Structure

```text
project/
├── app.js
└── utils/
    └── math.js
```

### app.js

```js
import { add } from './utils/math.js';

console.log(add(5, 10));
```

- `./` means the current directory.
- `../` means the parent directory.
- In Node.js ESM, we generally include the file extension in relative imports.

---

## 9. ESM in TypeScript

TypeScript also supports ES Modules using `import` and `export`.

However, when using TypeScript with Node.js, we need to configure how TypeScript handles modules.

### Step 1: Install TypeScript

```bash
npm install -D typescript
```

### Step 2: Initialize TypeScript Configuration

```bash
npx tsc --init
```

This creates a `tsconfig.json` file where we configure the TypeScript compiler.

### Step 3: Configure `tsconfig.json`

For a Node.js project using ESM, use the following configuration:

```json
{
    "compilerOptions": {
        "target": "ES2022",
        "module": "NodeNext",
        "moduleResolution": "NodeNext",
        "rootDir": "./src",
        "outDir": "./dist",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true
    }
}
```

### Meaning of Important Configurations

| Configuration | Meaning |
|---|---|
| `target` | JavaScript version TypeScript compiles into |
| `module` | Module system used for the generated JavaScript |
| `moduleResolution` | How TypeScript resolves imported modules |
| `rootDir` | Directory containing the source files |
| `outDir` | Directory where compiled files are generated |
| `strict` | Enables stricter type checking |
| `esModuleInterop` | Improves compatibility with certain CommonJS imports |
| `skipLibCheck` | Skips checking declaration files from libraries |

`NodeNext` allows TypeScript to follow Node.js's module rules for ESM and CommonJS.

---

## 10. Configuring `package.json`

When using the `NodeNext` configuration, we should also specify the module type in `package.json`.

```json
{
    "type": "module",
    "scripts": {
        "build": "tsc",
        "start": "node dist/app.js"
    }
}
```

- `"type": "module"` tells Node.js to treat `.js` files as ES Modules.
- `"build"` compiles TypeScript into JavaScript.
- `"start"` runs the compiled JavaScript application.

---

## 11. TypeScript ESM Example

### Folder Structure

```text
project/
├── src/
│   ├── app.ts
│   └── math.ts
├── dist/
├── package.json
└── tsconfig.json
```

### math.ts

```ts
export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}
```

### app.ts

```ts
import { add, subtract } from './math.js';

console.log(add(10, 5));
console.log(subtract(10, 5));
```

**Important:** Even though the actual source file is `math.ts`, when using `NodeNext`, we write `.js` in the import path.

TypeScript understands that the `.js` import refers to the TypeScript source file during compilation and preserves the `.js` extension in the output.

### Build the Project

```bash
npm run build
```

TypeScript compiles the files inside `src` and places the JavaScript output inside `dist`.

### Run the Compiled Project

```bash
npm start
```

**Output:**

```text
15
5
```

---

## 12. CommonJS vs ESM

| CommonJS (CJS) | ES Modules (ESM) |
|---|---|
| `require()` | `import` |
| `module.exports` | `export` |
| `module.exports = value` | `export default value` |
| Traditional Node.js module system | Modern JavaScript module system |
| `.cjs` can explicitly identify CJS | `.mjs` can explicitly identify ESM |
| `require` imports modules | `import` imports modules |

---

## 13. Summary

- ESM stands for ES Modules.
- It is the modern JavaScript module system.
- `export` allows us to share code between files.
- `import` allows us to use code from other files.
- Named exports allow multiple exports from one file.
- Default exports allow one primary export from a file.
- ESM can be enabled using `"type": "module"` or `.mjs` files.
- TypeScript supports ESM through `import` and `export`.
- With Node.js TypeScript projects, `module` and `moduleResolution` can be configured using `NodeNext`.
- In TypeScript NodeNext projects, relative import paths generally use `.js` extensions even when the source files are `.ts`.

> ESM makes our code modular, reusable, and easier to maintain while following the modern JavaScript module standard.
