# Installation

<a href="https://youtu.be/N6PjgN9licA?si=V2AQKoSJDdDsmsFZ">
    <img src='https://img.youtube.com/vi/N6PjgN9licA/maxresdefault.jpg' alt='Nodejs Installation' width="400" />
</a>

---

# How to Run Node.js

Node.js allows us to execute JavaScript code outside the browser, directly on our computer using a terminal.

<a href="https://www.youtube.com/watch?v=XhCs5cTYW_8&list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo&index=3">
    <img src='https://img.youtube.com/vi/XhCs5cTYW_8/maxresdefault.jpg' alt='Nodejs Installation' width="400" />
</a>

## 1. Create a JavaScript File

Create a file with the `.js` extension.

```text
hello.js
```

Write some JavaScript code inside it:

```js
console.log("Hello from Node.js!");
```

## 2. Open the Terminal

Open the terminal in the directory where your JavaScript file is located.

You can use the VS Code terminal:

`Ctrl + ``

## 3. Execute the File

Use the `node` command followed by the filename:

```bash
node hello.js
```

**Syntax:**

```bash
node filename.js
```

## 4. Output

When the command executes, Node.js runs the JavaScript code in the file and displays the output in the terminal.

```text
Hello from Node.js!
```

## How It Works

```text
JavaScript File (.js)
        |
        v
  Run `node filename.js`
        |
        v
   Node.js Runtime
        |
        v
   V8 Executes Code
        |
        v
 Output in Terminal
```

## Important Commands

| Command | Description |
|---|---|
| `node -v` | Checks the installed Node.js version |
| `npm -v` | Checks the installed npm version |
| `node filename.js` | Executes a JavaScript file |
| `node` | Opens the interactive Node.js REPL |

## Node.js REPL

REPL stands for **Read, Evaluate, Print, Loop**.

It allows us to execute JavaScript statements directly in the terminal without creating a file.

Start REPL:

```bash
node
```

Example:

```js
> 10 + 20
30

> console.log("Hello Node")
Hello Node
```

Exit REPL:

```bash
.exit
```

Or press `Ctrl + C` twice.

---

### Summary

- Node.js executes JavaScript outside the browser.
- `node filename.js` runs a JavaScript file.
- Node.js can execute code directly or through the REPL.
- The output is displayed in the terminal.

---

## Checking Node.js & npm Versions

We can check the installed versions using the following commands:

```bash
node -v
npm -v
```

- `node -v` — Displays the installed Node.js version.
- `npm -v` — Displays the installed npm version.

### What is npm?

**npm (Node Package Manager)** is the default package manager for Node.js. It is used to install, manage, and share JavaScript packages (libraries and tools) that we can use in our projects.

For example, we can use npm to install Express.js, React, and other third-party packages.

```bash
npm install express
```

