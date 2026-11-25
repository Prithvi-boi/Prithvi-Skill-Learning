# What is Node JS?
---
> In Short: Node.js is a cross-platform, open-source JavaScript runtime that executes code outside of a browser. It was created by Ryan Dahl in 2009 to allow JavaScript to be used for server-side scripting. Unlike traditional server environments, Node.js processes requests asynchronously, making it well-suited for I/O-heavy applications.
---
## Understand the problem
### Before Nodejs:
JavaScript was primarily designed to run inside a web browser.

For example, when you write JavaScript for a website:
console.log("Hello World");
alert("Hello");
document.querySelector("button");

This code runs inside a browser environment such as Chrome, which provides things like:
- document (DOM)
- window
- alert()
- HTML manipulation
- Browser APIs

> But what if you want to run JavaScript outside the browser?

What if you want to:
- Create a backend server?
- Read and write files on your computer?
- Connect to a database?
- Build APIs?
- Handle requests from users?
JavaScript, by itself, didn't originally provide this environment.

That's where Node.js comes in.

## What is Nodejs?
Node.js is an open-source, cross-platform JavaScript runtime environment that allows you to execute JavaScript outside a web browser.

For example, using Node.js, you can run this JavaScript directly in your terminal:
```js
console.log("Hello from Node.js!");
```

You don't need HTML or a browser to execute it.

<a href='https://youtu.be/ohIAiuHMKMI?si=T0Ouvm0AcY7yw8a_' >
  <img src="https://img.youtube.com/vi/ohIAiuHMKMI/hqdefault.jpg" width="400" alt='What is nodejs'>
</a>

---

## What can you build with Node.js?

1. Backend servers: Handle logic and requests.

2. REST APIs: Communicate with frontend applications.

3. Database-powered apps: Store and retrieve data.

4. CLI tools: Build developer tools and automation.


Node.js is also used for real-time applications, streaming, background jobs, tooling, and more.

---

## NodeJs Vs Browser

You already know JavaScript. The important thing to understand is that Node.js doesn't replace JavaScript; it provides a new environment for JavaScript.

| Browser | Node.js |
| --- | ---| 
| Frontend environment | Backend / runtime environment |
| - DOM manipulation | - File system access
| - window | - Create servers
| - document | - HTTP requests
| - User interactions | - Database connections
| - Rendering webpages | - Operating system access


The JavaScript language remains the same, but the environment and available APIs are different.

For example:
```js
// Works in the browser
console.log(window);
console.log(document);
```
```js
// Works in Node.js
console.log(process);
console.log(__dirname); // CommonJS
```

> window and document aren't available by default in Node.js because Node doesn't have a browser DOM.

---

## Nodejs History

Ryan Dahl created Node.js in 2009 to make it possible to build scalable network applications using JavaScript.

```text
       JavaScript (Originally Browser-Only)
                     |
                     v
      Developers needed scalable servers
                     |
                     v
    Ryan Dahl (2009) created Nodejs using C++
                     |
                     v
    Introduced Node.js at JSConf Europe
                     |
                     v
  JavaScript outside the browser becomes possible
                     |
                     v
    Node.js built using V8 + libuv
                     |
                     v
    Non-blocking, event-driven architecture
                     |
                     v
       Scalable network applications
```

### Key Facts
- **Creator:** Ryan Dahl
- **Released:** 2009
- **Engine:** Google V8
- **Purpose:** Run JavaScript outside the browser and build scalable network applications.
- **Core idea:** Non-blocking I/O and event-driven architecture.
``