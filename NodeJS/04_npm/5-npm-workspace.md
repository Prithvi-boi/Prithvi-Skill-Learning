# 📦 NPM Workspaces

## Demonstration Video: 

<a href="https://www.youtube.com/watch?v=4CpR-_Nyd00">
  <img src="https://img.youtube.com/vi/4CpR-_Nyd00/hqdefault.jpg" width="400">
</a>

## 1. What are NPM Workspaces?

**NPM Workspaces** allow us to manage multiple packages or projects inside a single repository.

Instead of maintaining multiple projects in separate repositories, we can keep them together in one repository, called a **Monorepo (Monolithic Repository)**.

NPM automatically manages the packages inside the workspace and can link them together, making it easier to share code between packages.

---

## 2. What is a Monorepo?

A **Monorepo** is a single Git repository that contains multiple projects or packages.

For example, imagine we are building a full-stack application with:

- Frontend
- Backend
- Shared utilities

We can keep all of them inside one repository.

### 📁 Folder Structure

```text
my-app/
│
├── package.json          # Root package
├── node_modules/
│
├── apps/
│   ├── frontend/
│   │   └── package.json
│   │
│   └── backend/
│       └── package.json
│
└── packages/
    └── shared/
        └── package.json
```

- `frontend` → React application.
- `backend` → Node.js server.
- `shared` → Code that can be reused by both frontend and backend.

---

## 3. How to Create NPM Workspaces?

We define the workspaces inside the **root `package.json`** file.

### Root `package.json`

```json
{
  "private": true,
  "workspaces": [
    "apps/*",
    "packages/*"
  ]
}
```

### What does this mean?

- `"workspaces"` → Tells NPM which folders are part of the workspace.
- `"apps/*"` → Includes all packages inside the `apps` folder.
- `"packages/*"` → Includes all packages inside the `packages` folder.
- `"private": true` → Prevents accidentally publishing the root project to NPM.

---

## 4. How Does NPM Manage Workspaces?

When we run:

```bash
npm install
```

from the root directory, NPM:

- Installs dependencies for the workspace packages.
- Automatically links workspace packages together when they depend on one another.
- Manages dependencies from the root of the monorepo.

This makes sharing code between packages easier without manually linking them.

---

## 5. Running Scripts Across Workspaces

We can run scripts for a specific workspace from the root.

```bash
npm run dev --workspace=frontend
```

This runs the `dev` script inside the `frontend` workspace.

We can also run a script across all workspaces:

```bash
npm run test --workspaces
```

This attempts to run the `test` script in each workspace that defines it.

---

## 6. Installing Packages in Workspaces

We can install a package for a specific workspace without navigating into its folder.

### Install in a specific workspace

```bash
npm install express --workspace=backend
```

This installs Express as a dependency of the backend workspace.

### Install at the root

```bash
npm install -D typescript
```

This installs TypeScript as a root development dependency, useful for tooling shared across the monorepo.

---

## 7. Why Use NPM Workspaces?

- 🟢 **Code Sharing** → Share code between frontend, backend, and other packages.
- 🔵 **Centralized Management** → Manage multiple packages in one repository.
- 🟣 **Less Duplication** → Avoid repeating shared code across projects.
- 🟠 **Simpler Workflow** → Install dependencies and run scripts from the root.
- ⚪ **Automatic Linking** → NPM links local workspace packages together.

---

## 💡 Remember

> 🟢 **Workspace** → Multiple packages managed together.

> 🔵 **Monorepo** → One repository containing multiple projects/packages.

> 🟣 **Root `package.json`** → Defines which folders are workspaces.

> 🟠 **`npm install`** → Installs and links dependencies for workspaces.

> ⚪ **NPM Workspaces** → Useful for managing frontend, backend, and shared packages inside one repository.