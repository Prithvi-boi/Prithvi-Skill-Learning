
# File Handling in NodeJS

<a href="https://www.youtube.com/watch?v=YazJFb_i4A0&list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo&index=5">
  <img src="https://img.youtube.com/vi/YazJFb_i4A0/hqdefault.jpg" width="400">
</a>

---


# 📁 File Handling in Node.js

File handling allows us to create, read, write, update, delete, and manage files using Node.js.

Node.js provides a built-in module called **`fs` (File System)** to interact with files and directories on our computer.

> 🟢 **`fs` = File System module** — It allows Node.js to work with files and folders without installing any external packages.

---

## 1. Introduction to the `fs` Module

The `fs` module is a built-in Node.js module used to interact with the file system.

We need to import it before using its methods.

### CommonJS

```js
const fs = require("fs");
```

### ES Modules

```js
import fs from "node:fs";
```

The `fs` module supports both synchronous and asynchronous operations.

---

## 2. Types of File Handling

Node.js provides three main approaches to handling file operations.

| Type | Description |
|---|---|
| **Synchronous** | Executes the operation and blocks further execution until completed. |
| **Asynchronous (Callback)** | Executes without blocking, using a callback function to handle the result. |
| **Asynchronous (Promise)** | Executes without blocking and handles results using Promises and `async/await`. |

### Synchronous vs Asynchronous

#### Synchronous (Blocking)

```js
const data = fs.readFileSync("file.txt", "utf-8");

console.log(data);
console.log("Next task");
```

The next statement waits until the file has been read.

#### Asynchronous (Non-blocking)

```js
fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) throw err;

  console.log(data);
});

console.log("Next task");
```

The next task can execute while the file operation is in progress.

> 🟡 **Note:** Asynchronous operations are generally preferred in server applications because synchronous operations block the event loop.

---

## 3. Importing the `fs` Module

Node.js provides different ways of accessing the File System module.

### A. Regular `fs` Module

```js
const fs = require("fs");
```

It supports both synchronous and callback-based asynchronous methods.

### B. `fs/promises` Module

```js
const fs = require("fs/promises");
```

It provides Promise-based methods that can be used with `async/await`.

---

## 4. Creating and Writing Files

We can create a file and write content into it using `writeFile()`.

### Asynchronous — `writeFile()`

```js
const fs = require("fs");

fs.writeFile("demo.txt", "Hello Node.js!", (err) => {
  if (err) throw err;

  console.log("File created successfully!");
});
```

- If the file does not exist, it creates a new file.
- If the file already exists, its previous content is **overwritten**.

### Synchronous — `writeFileSync()`

```js
fs.writeFileSync("demo.txt", "Hello Node.js!");
```

> 🔴 **Warning:** `writeFile()` overwrites existing content by default. Be careful when writing to important files.

---

## 5. Reading Files

We can read the contents of a file using `readFile()`.

### Asynchronous — `readFile()`

```js
fs.readFile("demo.txt", "utf-8", (err, data) => {
  if (err) throw err;

  console.log(data);
});
```

### Synchronous — `readFileSync()`

```js
const data = fs.readFileSync("demo.txt", "utf-8");

console.log(data);
```

### Why `"utf-8"`?

Without an encoding, Node.js returns the file contents as a **Buffer** (binary data).

Using `"utf-8"` converts the file contents into a readable string.

```js
const data = fs.readFileSync("demo.txt");

console.log(data); // <Buffer ...>
```

```js
const data = fs.readFileSync("demo.txt", "utf-8");

console.log(data); // Hello Node.js!
```

---

## 6. Appending Content to a File

Appending means **adding new content at the end of an existing file** without deleting its previous content.

### `appendFile()`

```js
fs.appendFile("demo.txt", "\nNew content added!", (err) => {
  if (err) throw err;

  console.log("Content appended successfully!");
});
```

### `appendFileSync()`

```js
fs.appendFileSync("demo.txt", "\nNew content added!");
```

If the file doesn't exist, `appendFile()` will create it.

---

## 7. Deleting Files

We can delete a file using `unlink()`.

### Asynchronous — `unlink()`

```js
fs.unlink("demo.txt", (err) => {
  if (err) throw err;

  console.log("File deleted successfully!");
});
```

### Synchronous — `unlinkSync()`

```js
fs.unlinkSync("demo.txt");
```

> 🔴 **Warning:** Deleting a file is permanent in the context of this operation. Make sure the correct path is provided.

---

## 8. Renaming Files

The `rename()` method is used to rename a file or move it to another location.

### `rename()`

```js
fs.rename("old.txt", "new.txt", (err) => {
  if (err) throw err;

  console.log("File renamed successfully!");
});
```

### `renameSync()`

```js
fs.renameSync("old.txt", "new.txt");
```

You can also use `rename()` to move a file:

```js
fs.rename("demo.txt", "files/demo.txt", (err) => {
  if (err) throw err;

  console.log("File moved successfully!");
});
```

---

## 9. Checking if a File Exists

We can use `existsSync()` to check whether a path exists.

```js
if (fs.existsSync("demo.txt")) {
  console.log("File exists");
} else {
  console.log("File does not exist");
}
```

> 🟡 **Note:** Avoid using `existsSync()` as a check before asynchronous file operations in server code, because the file could change between the check and the operation. Handle errors directly instead.

---

## 10. Working with Directories (Folders)

The `fs` module also allows us to create, read, and delete directories.

### Creating a Directory — `mkdir()`

```js
fs.mkdir("myFolder", (err) => {
  if (err) throw err;

  console.log("Folder created!");
});
```

### Create Nested Directories

```js
fs.mkdir("parent/child/files", { recursive: true }, (err) => {
  if (err) throw err;

  console.log("Nested folders created!");
});
```

The `recursive: true` option automatically creates missing parent directories.

### Reading Directory Contents — `readdir()`

```js
fs.readdir("myFolder", (err, files) => {
  if (err) throw err;

  console.log(files);
});
```

It returns an array of file and folder names inside the directory.

### Deleting a Directory — `rmdir()`

```js
fs.rmdir("myFolder", (err) => {
  if (err) throw err;

  console.log("Folder deleted!");
});
```

For removing directories and their contents, you can use:

```js
fs.rm("myFolder", { recursive: true, force: true }, (err) => {
  if (err) throw err;

  console.log("Folder removed!");
});
```

> 🔴 **Warning:** `recursive: true` can remove an entire directory tree. Use it carefully.

---

## 11. File Handling using Promises and Async/Await

The `fs/promises` module lets us write asynchronous file-handling code in a cleaner way using `async/await`.

### Reading a File

```js
const fs = require("fs/promises");

async function readFile() {
  try {
    const data = await fs.readFile("demo.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.log("Error:", err.message);
  }
}

readFile();
```

### Writing a File

```js
const fs = require("fs/promises");

async function createFile() {
  try {
    await fs.writeFile("demo.txt", "Hello Node.js!");
    console.log("File written successfully!");
  } catch (err) {
    console.log(err.message);
  }
}

createFile();
```

### Appending a File

```js
await fs.appendFile("demo.txt", "\nAnother line");
```

### Deleting a File

```js
await fs.unlink("demo.txt");
```

> 🟢 **Tip:** `async/await` is often easier to read and maintain than deeply nested callbacks.

---

## 12. Common File System Methods

| Method | Purpose |
|---|---|
| `readFile()` | Reads file content |
| `readFileSync()` | Reads file synchronously |
| `writeFile()` | Creates or overwrites a file |
| `writeFileSync()` | Creates or overwrites synchronously |
| `appendFile()` | Adds content at the end |
| `appendFileSync()` | Adds content synchronously |
| `unlink()` | Deletes a file |
| `rename()` | Renames or moves a file |
| `mkdir()` | Creates a directory |
| `readdir()` | Reads directory contents |
| `rmdir()` | Removes a directory (legacy for many uses) |
| `rm()` | Removes files or directories |
| `stat()` | Retrieves file/directory information |
| `existsSync()` | Checks whether a path exists synchronously |
| `copyFile()` | Copies a file |

---

## 13. `stat()` — Getting File Information

The `stat()` method provides information about a file or directory, such as size, creation time, and whether it is a file or a directory.

```js
fs.stat("demo.txt", (err, stats) => {
  if (err) throw err;

  console.log("File:", stats.isFile());
  console.log("Directory:", stats.isDirectory());
  console.log("Size:", stats.size, "bytes");
});
```

### Some Useful Properties and Methods

| Property / Method | Description |
|---|---|
| `stats.size` | Size in bytes |
| `stats.isFile()` | Checks if it's a file |
| `stats.isDirectory()` | Checks if it's a directory |
| `stats.mtime` | Last modification time |
| `stats.birthtime` | Creation time (where supported) |

---

## 14. Copying Files

We can copy a file using `copyFile()`.

```js
fs.copyFile("demo.txt", "backup.txt", (err) => {
  if (err) throw err;

  console.log("File copied successfully!");
});
```

This creates `backup.txt` containing the contents of `demo.txt`.

---

## 15. Relative and Absolute Paths

File paths are important while working with the `fs` module.

### Relative Path

A relative path is calculated relative to the current working directory (typically where Node.js was launched).

```js
fs.readFile("demo.txt", "utf-8", callback);
```

### Absolute Path

An absolute path specifies the complete location of a file.

```js
fs.readFile("C:/Users/Project/demo.txt", "utf-8", callback);
```

### Using `__dirname` (CommonJS)

`__dirname` gives the directory path of the current JavaScript file in CommonJS.

```js
const filePath = `${__dirname}/demo.txt`;

fs.readFile(filePath, "utf-8", callback);
```

### Using `import.meta.url` (ES Modules)

In ES Modules, we can use `import.meta.url` to identify the current module's URL.

```js
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";

const filePath = fileURLToPath(
  new URL("./demo.txt", import.meta.url)
);

const data = await fs.readFile(filePath, "utf-8");

console.log(data);
```

> 💡 **Tip:** For reliable path handling across operating systems, Node.js also provides the built-in `path` module.

---

## 16. File Handling with the `path` Module

The `path` module helps us safely construct and manipulate file paths.

```js
const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "files", "demo.txt");

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) throw err;

  console.log(data);
});
```

`path.join()` joins different path segments using the appropriate separator for the operating system.

For example:

- Windows → `\\`
- Linux / macOS → `/`

---

## 17. Important Things to Remember

### 🟢 Best Practices

- Prefer asynchronous methods in server-side applications.
- Use `fs/promises` with `async/await` when it makes code easier to read.
- Handle errors using `try...catch` or callback error checks.
- Use the `path` module to construct paths.
- Use `"utf-8"` when reading text files as strings.

### 🔴 Avoid

- Using synchronous methods for large file operations in server code.
- Accidentally overwriting files with `writeFile()`.
- Deleting files or folders without checking the intended path.
- Assuming relative paths are based on the current JavaScript file.

---

## 18. Quick Summary

```text
fs module
│
├── Read
│   ├── readFile()
│   └── readFileSync()
│
├── Write
│   ├── writeFile()
│   └── writeFileSync()
│
├── Append
│   ├── appendFile()
│   └── appendFileSync()
│
├── Delete
│   ├── unlink()
│   └── rm()
│
├── Rename / Move
│   └── rename()
│
├── Directories
│   ├── mkdir()
│   ├── readdir()
│   └── rm()
│
├── Information
│   └── stat()
│
└── Copy
    └── copyFile()
```

> 🟢 **The `fs` module is one of the most important built-in modules in Node.js because it allows applications to interact with the computer's files and directories.**
