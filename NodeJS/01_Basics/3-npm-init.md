## npm init

`npm init` is a command used to initialize a new Node.js project. It creates a `package.json` file, which stores project information, dependencies, scripts, and configuration.

### 1. Initialize a Project

```bash
npm init
```

It asks several questions such as project name, version, description, entry point, etc., and creates a `package.json` file based on your answers.

To skip all questions and generate the default configuration:

```bash
npm init -y
```

### 2. What is package.json?

`package.json` is the configuration file of a Node.js project. It contains metadata and manages the project's dependencies and scripts.

Example:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "My first Node.js project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\""
  }
}
```

### 3. Important Fields

| Field | Description |
|---|---|
| `name` | Name of the project |
| `version` | Current project version |
| `description` | Short description of the project |
| `main` | Entry point of the project |
| `scripts` | Custom commands that can be executed using npm |
| `dependencies` | Packages required for the project to run |
| `devDependencies` | Packages required during development |

### 4. Running npm Scripts

We can define custom commands inside the `scripts` section of `package.json`.

```json
"scripts": {
  "start": "node index.js"
}
```

Run the script using:

```bash
npm run start
```

For the special script `start`, we can also use:

```bash
npm start
```

### Summary

- `npm init` initializes a Node.js project.
- `npm init -y` creates `package.json` with default values.
- `package.json` manages project metadata, dependencies, and scripts.
- `npm run` executes custom scripts defined in `package.json`.
