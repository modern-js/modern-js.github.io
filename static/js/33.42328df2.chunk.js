(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{917:function(n,e){n.exports="# Variables\n---\n\n## Declaration\n\n```javascript\n  aGlobalVar = 'an implicit global scope variable';\n\n  var funcVar = 'a function scope variable';\n\n  let blockVar = 'a block scope variable';\n```\n---\n\n## Bindings\n\n```javascript\nconst blockImmutable = 'an immutable block scope binding';\n\n// an immutable module scope binding\nimport thing from 'lib';\n\n// global object bindings:\nglobal, window\n```\n\nSee [Scopes](../scopes/)\n---\n\n### Hoisting\n\n`var` declarations are hoisted to the top of the scope.\nThe assignment remains at the same point in the code.\n\n```javascript\n  function sayHi() {\n    console.log(hello);\n    var hello = 'hi';\n  }\n\n  sayHi() // undefined;\n\n  // the above code is equivalent to:\n  function sayHi() {\n    var hello = undefined;\n    console.log(hello);\n    hello = 'hi';\n  }\n```\n---\n\n## Destructuring\n\n```javascript\n  const [x, y] = [1, 2];\n  // x = 1, y = 2\n\n  let { height } = { height: 1.83 };\n  // height = 1.83\n\n  const { dog: { name: dogName } } = { dog: { name: 'Barsa' } };\n  // dogName = 'Barsa'\n```\n---\n\n## Temporal Dead Zone (TDZ)\n\nYou cannot use `let` and `const` variable\nbefore where they are declared in the code.\n\n```javascript\n  console.log(a); // throws an TDZ error\n\n  let a = 5;\n```\n---\n\n## Variables and references\n\nVariables cannot reference other variables, only values.\n\n```javascript\n  let s = \"hello\";\n  let z = s;\n  // reassignment\n  z += \" world\";\n  console.log(s); // \"hello\"\n\n  const myObj = { msg: 'hello' };\n  const aRef = myObj;\n  // references the same object\n  aRef.msg += ' world';\n  console.log(myObj.msg) // 'hello world'\n```\n---\n\n## Parameters and Values\n\nParameters are passed by value.\nThe receiving function cannot change\nthe bindings of the calling context.\n\n```javascript\n  function swap(x, y) {\n    var z = x;\n    x = y; y = z;\n  }\n  var x = 5; var y = 10;\n  swap(x, y); // does nothing\n  console.log(x, y); // 5, 10\n```\n\n```javascript\n  function swapInObject(obj) {\n    var z = obj.x;\n    obj.x = obj.y; obj.y = z;\n  }\n  var myObj = { x: 5, y: 10 };\n  swapInObject(myObj);\n  console.log(myObj); // { x: 10, y: 5 }\n```\n"}}]);
//# sourceMappingURL=33.42328df2.chunk.js.map