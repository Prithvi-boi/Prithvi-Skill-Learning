# 📜 NPM Scripts (Running Scripts)

## 1. What are NPM Scripts?

**NPM Scripts** allow us to define custom commands inside the `package.json` file to execute tasks in our project.

They are commonly used for:

- 🟢 Starting a development server.
- 🔵 Building a project for production.
- 🟣 Running tests.
- 🟠 Running tools like TypeScript, Nodemon, ESLint, etc.

> Instead of typing long commands repeatedly, we can create shortcuts for them.

---

## 2. Where do we define scripts?

Scripts are defined inside the `"scripts"` property of the `package.json` file.

### Example `package.json`

```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "node test.js"
  }
}
```

Here, we have defined three scripts:

| Script | Purpose |
|---|---|
| `start` | Starts the application. |
| `dev` | Runs the application in development mode using Nodemon. |
| `test` | Runs our test file. |

---

## 3. How to Run NPM Scripts?

We use `npm run` followed by the script name to execute a script.

```bash
npm run dev
```

This executes the command `"nodemon index.js"` defined inside the `dev` script.

### Syntax

```bash
npm run script-name
```

### Special Commands

Some scripts have special names and can be executed without `run`.

```bash
npm start
npm test
```

These are shortcuts for:

```bash
npm run start
npm run test
```

> 🟡 Most custom scripts require `npm run`, while `start` and `test` have special shortcuts.

---

## 4. Splitting Scripts into Smaller Parts

We can define multiple smaller scripts and reuse them inside other scripts using `npm run`.

This helps when a project has complex commands.

### Example

```json
{
  "scripts": {
    "clean": "node clean.js",
    "build": "node build.js",
    "dev": "npm run clean && npm run build && node index.js"
  }
}
```

Here:

- `clean` → Cleans previous files.
- `build` → Builds the project.
- `dev` → Executes the `clean` script, then the `build` script, and finally starts the application.

### Operators

| Operator | Meaning |
|---|---|
| `&&` | Runs the next command only if the previous command succeeds. |
| `&` | Runs commands in parallel in some shells (behavior can vary by OS/shell). |

---

## 5. Why are NPM Scripts useful?

- **Shortcuts** → Avoid typing long commands repeatedly.
- **Consistency** → Everyone on the team can run the same commands.
- **Automation** → Combine multiple tasks into a single script.
- **Organization** → Keep project commands in one place.
- **Easy execution** → NPM automatically makes locally installed package commands available to scripts.

---

## 💡 Remember

> 🟢 `package.json` → Where scripts are defined.

> 🔵 `npm run` → Used to execute custom scripts.

> 🟣 `&&` → Allows chaining commands sequentially, stopping if one fails.

> 🟠 NPM scripts are not limited to Node.js commands — we can execute other installed tools through them as well.

---

## Extras:

| Operator | Behavior | Example |
|---|---|---|
| `&&` | Runs next command if previous succeeds | `npm install && npm run build` |
| `;` | Runs next command regardless of previous result | `npm test; npm run lint` |
| `||` | Runs next command if previous fails | `npm run build || echo "Failed"` |
| `&` | Background execution in Bash | `npm run server &` |

---

## 💡 Remember

- 🟢 `&&` → Success → Continue
- 🟡 `;` → Continue regardless
- 🔴 `||` → Failure → Continue
- 🔵 `&` → Background execution in Bash

