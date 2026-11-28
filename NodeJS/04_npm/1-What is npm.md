# 📦 NPM & NPX in Node.js

## 1. What is NPM?

<span style="color:#58a6ff"><strong>NPM (Node Package Manager)</strong></span> is a tool used to **install, manage, and use packages** in our Node.js projects.

A **package** is reusable code written by someone else that we can use in our project instead of writing everything from scratch.

For example, instead of creating our own code for different functionalities, we can install packages that already provide them.

### 🛠️ What does NPM do?

- <span style="color:#3fb950">Installs packages</span> in our project.
- <span style="color:#d29922">Manages dependencies</span> required by our application.
- Helps manage package versions.
- Allows us to run scripts defined inside `package.json`.

### Common NPM Commands

```bash
# Initialize a Node.js project
npm init

# Initialize with default settings
npm init -y

# Install a package
npm install package-name

# Install a development dependency
npm install package-name --save-dev

# Uninstall a package
npm uninstall package-name

# Check npm version
npm -v
```

---

## 2. What is NPX?

<span style="color:#a371f7"><strong>NPX (Node Package Executor)</strong></span> is a tool used to **execute packages without manually installing them globally**.

It is useful when we want to run a package or tool directly without keeping a separate global installation on our system.

```bash
npx package-name
```

### 💡 Example

```bash
npx create-vite my-app
```

This command runs the `create-vite` tool to create a new Vite project named `my-app`.

We don't need to manually install `create-vite` globally before running it.

---

## 3. NPM vs NPX

| 🟦 NPM | 🟪 NPX |
|---|---|
| Used to install and manage packages. | Used to execute packages/tools. |
| Adds packages to our project or installs them globally. | Runs tools without manually installing them globally first. |
| Example: `npm install express` | Example: `npx create-vite my-app` |

---

## 4. Simple Analogy

Imagine packages are tools:

- <span style="color:#58a6ff"><strong>NPM</strong></span> → Gets and manages tools for your project.
- <span style="color:#a371f7"><strong>NPX</strong></span> → Lets you use a tool when you need it, without manually installing it globally first.

---

> 💡 **Note:** NPX comes bundled with modern versions of NPM, so you generally don't need to install it separately.

> 🟢 **Remember:** NPM is mainly for managing packages, while NPX is mainly for executing packages.

---

# 📦 Semantic Versioning (SemVer)

**Semantic Versioning (SemVer)** is a standard way of assigning version numbers to software to show what kind of changes have been made.

A version number usually looks like this:

```bash
1.2.3
```

It follows the format:

<span style="color:#58a6ff"><strong>MAJOR.MINOR.PATCH</strong></span>

### 🔢 The 3 Parts

- <span style="color:#f85149"><strong>MAJOR</strong></span> → Breaking changes (changes that can break existing code).
- <span style="color:#3fb950"><strong>MINOR</strong></span> → New features added without breaking existing code.
- <span style="color:#d29922"><strong>PATCH</strong></span> → Small bug fixes without adding new features.

### Example

Suppose the current version is `1.2.3`:

| Change | New Version |
|---|---|
| Breaking change | `2.0.0` |
| New feature | `1.3.0` |
| Bug fix | `1.2.4` |

### 💡 Remember

> 🔴 MAJOR = Breaking changes
> 🟢 MINOR = New features
> 🟡 PATCH = Bug fixes

Minecraft-like example
Imagine you're developing your own game:
- 1.0.0 → First stable release
- 1.0.1 → Fixed a bug in movement
- 1.1.0 → Added multiplayer
- 1.2.0 → Added a new inventory system
- 2.0.0 → Completely changed the game engine, breaking compatibility with old saves

> the last number usually changes for bug fixes, the middle number for new features, and the first number for major breaking changes.