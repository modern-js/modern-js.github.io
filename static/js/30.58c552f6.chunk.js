(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{914:function(n,e){n.exports="# Scopes\nExecution context - the context in which values and expressions are \"visible\" or can be referenced.\n---\n\n## Block scope\n\n```javascript\n  let i = 100;\n  {\n    var x = 5; // hoisted\n    let y = 10;\n    const z = 15;\n  }\n\n  i // 100\n  x // 5\n  y // throws an Error\n  z // throws an Error\n```\n---\n\n## Function scope\n\n```javascript\nfunction f() {\n  // var x is hoisted\n  \n  doSomeStuff(x); // x is undefined\n\n  var x = 5;\n  // but the assignment happens at the original place in the code\n}\n\n// accessing x outside the function\nx // throws an Error\n```\n---\n\n## Module scope\n\nModules create their own scopes.\n\n```javascript\n  // imports are immutable bindings\n  import lib from 'myLib';\n\n  // x is in the module scope\n  let x = 5;\n\n  // exports are immutable bindings\n  // the value of x cannot be changed from outside of the module\n  export x;\n\n  export function doStuff(arg) {\n    // reassign x within the module\n    x = lib.use(arg);\n\n    return 'done';\n  }\n  ```\n---\n\n## Global scope\n\nIn the browser the global scope is the `window` object.\n\n```javascript\n  // any variable defined without using var, let or const\n  // gets attached to the global object\n  myGlobalVar = 5;\n\n  window.myGlobalVar // 5\n```\n---\n\n## Global scope\n\nIn node.js modules scope shadows global scope.\nThe `global` object exposes the global scope\n\n```javascript\n  // implied globals are in module scope\n  y = 100;\n\n  // create globals by assigning to the global object\n  // these will be accessible from any module through global\n  global.z = 200;\n```\n---\n\n## Lexical scope (Closure)\n\nFunctions have access to the scope\nthey are defined in.\n\n---\nModule A:\n```javascript\n  const greeting = 'Hello!'; // module scope\n\n  export function SayHi() {\n    console.log(greeting);\n  }\n```\n\nModule B:\n```javascript\n  import { sayHi } from './moduleA';\n  \n  sayHi(); // Hello!\n```\n---\n\n## Scopes\n\n![Scopes](/images/scopes.jpg)\n"}}]);
//# sourceMappingURL=30.58c552f6.chunk.js.map