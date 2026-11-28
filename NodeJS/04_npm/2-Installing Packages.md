# 📦 Installing Packages in Node.js

Packages are reusable code created by other developers that we can install and use in our projects instead of building everything from scratch.

We can install packages in **two ways**:

- 🟦 **Local Installation**
- 🟪 **Global Installation**

---

## 1. Local Installation

In local installation, a package is installed **inside a particular project**.

```bash
npm install package-name
```

### Example

```bash
npm install express
```

This installs Express inside our current project.

### 📁 Where is it stored?

Packages are stored inside the `node_modules` folder in our project.

```text
MyProject/
│
├── node_modules/
│   └── express/
│
├── package.json
└── package-lock.json
```

### What happens during installation?

- <span style="color:#58a6ff">`node_modules`</span> → Stores the actual installed packages.
- <span style="color:#3fb950">`package.json`</span> → Keeps track of the packages our project depends on.
- <span style="color:#d29922">`package-lock.json`</span> → Records the exact installed dependency versions and dependency tree.

> 🟢 Local installation is the default installation method in NPM.

---

## 2. Global Installation

In global installation, a package is installed on our system rather than inside a specific project.

```bash
npm install -g package-name
```

The `-g` flag stands for **Global**.

### Example

```bash
npm install -g nodemon
```

Now, we can use `nodemon` from different projects without installing it separately in each project.

### 📁 Where are global packages stored?

On **Windows**, global NPM packages are generally installed in:

```text
C:\Users\YourUsername\AppData\Roaming\npm\node_modules
```

Global command executables (such as `nodemon`) are made available through the global NPM directory, which is added to the system's PATH.

> 🟣 Global packages are not stored inside your current project's `node_modules` folder.

---

## 3. Local vs Global Installation

| Local Installation | Global Installation |
|---|---|
| Installed inside a particular project. | Installed on your system. |
| Stored in the project's `node_modules`. | Stored in the global NPM directory. |
| Used specifically by that project. | Commands can be used across projects. |
| `npm install package` | `npm install -g package` |

---

## 4. How to Check Global Installation Location?

Use the following command:

```bash
npm root -g
```

It displays the directory where global packages are installed.

To check where global executables are installed:

```bash
npm prefix -g
```

---

## 5. Famous NPM Packages for Full-Stack Web Developers

### 🖥️ Frontend

| Package | Purpose |
|---|---|
| `react` | Building user interfaces. |
| `vite` | Fast development server and build tool. |
| `react-router` | Routing/navigation in React applications. |
| `axios` | Making HTTP requests to APIs. |
| `tailwindcss` | Utility-based CSS styling. |

### ⚙️ Backend (Node.js)

| Package | Purpose |
|---|---|
| `express` | Building backend servers and APIs. |
| `cors` | Allowing cross-origin requests. |
| `dotenv` | Loading environment variables from `.env` files. |
| `jsonwebtoken` | Creating and verifying JWT tokens. |
| `bcrypt` | Hashing passwords. |
| `multer` | Handling file uploads. |
| `socket.io` | Real-time communication. |

### 🗄️ Database

| Package | Purpose |
|---|---|
| `mongoose` | Working with MongoDB using schemas and models. |
| `pg` | Connecting Node.js to PostgreSQL. |
| `prisma` | ORM for working with databases. |

### 🛠️ Development Tools

| Package | Purpose |
|---|---|
| `nodemon` | Automatically restarting the server when files change. |
| `typescript` | Adding static typing to JavaScript. |
| `tsx` | Running TypeScript files directly. |
| `eslint` | Finding code problems and enforcing rules. |
| `prettier` | Formatting code consistently. |

---

## 6. When Should We Install Packages Locally or Globally?

🟢 **Local:** When a package is required by a particular project.

Examples: `express`, `mongoose`, `react`, `axios`.

🟣 **Global:** When a tool is useful across multiple projects and you want to run its command from anywhere.

Examples: `nodemon`, `typescript` (CLI).

> 💡 **Best Practice:** Prefer local installation for project dependencies. This keeps each project independent and allows it to use its own package versions.

