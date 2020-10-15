(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{900:function(n,t){n.exports="# Functions\n---\n\n## Anatomy of a function\n\nFunctions are objects that inherit from `Function.prototype`.\nTo become a function, an object must implement\nthe `[[Call]]` and `[[Construct]]` internal methods.\n---\n\nFunctions have a `declaration`, also called a `function signature` and a `body`.\nThe `declaration` contains an optional name and a list of parameters.\nThe body is a code block (ordered statements).\n---\n\nAll functions can return a value through the `return` statement.\nIf no explicit value is specified, the `undefined` value is returned by default.\n\nExecuting a function creates a new internal `scope` object.\n---\n\n## Properties\n\nSince functions are objects they can have their own properties\n\n```javascript\n  // the number of parameters the function formally accepts\n  f.length\n\n  f.myVar = 42;\n```\n---\n\n### Statement vs expression form\n\nBoth forms define a function value and bind it to a variable with the given name.\nBut function statements are hoisted.\n\n```javascript\n  // a function statement, the name is mandatory\n  function identity(parameter) {\n    return parameter;\n  }\n```\n\n```javascript\n  // a function expression\n  var identity = function identity(parameter) {\n    return parameter;\n  };\n```\n---\n\n## Arrow functions\n\n```javascript\n  // single argument arrow function declaration\n  // returns the value of the last (and only) expression\n  const identity = id => id;\n\n  // multiple parameters\n  const add = (a, b) => a + b;\n\n  // with a function body block\n  const validate = (input) => {\n    if (input !== 'correct') {\n      throw new Error('not correct');\n    }\n  };\n```\n---\n\n## Methods\n\nA method is a function which is assigned as a property of an object.\n\n```javascript\n  // es5\n  var object = {\n    method: function () { doStuff(); }\n  };\n\n  // es6\n  const object = {\n    method() { doStuff(); }\n  };\n```\n---\n\n### Calling context\n\nWhen using dot notation to invoke a method e.g. `object.method()`\nthe value of `this` in the scope of the function execution\nis assigned the `object` value.\n\n```javascript\nconst getFullName = function fullName() {\n  return `${this.firstName} ${this.lastName}`;\n}\n\nconst person  = {\n  firstName: 'John',\n  lastName: 'Doe',\n  getName: getFullName\n};\n\nperson.getName(); // returns \"John Doe\"\n```\n---\n\n### Arrows are not methods\n\nArrow functions used as methods have their `this` assigned to the `this` value of the outer scope.\nTheir `this` **is NOT** the object from their invocation.\n\n```javascript\n// this = undefined\nconst getFullName = () => `${this.firstName} ${this.lastName}`;\n\nconst person  = {\n  firstName: 'John',\n  lastName: 'Doe',\n  getName: getFullName\n};\n\nperson.getName(); // throws an error\n```\n---\n\n## Lexical scopes\n\nFunctions have access to the scope containing their definition,\nand it's parent scopes.\n\n```javascript\nfunction factory(factoryOptions) {\n  const config = getConfig();\n\n  return function instance(instanceOptions) {\n    // this function can acces all of these:\n    factoryOptions,\n    instanceOptions,\n    config\n  };\n}\n```\n---\n\n## Execution context\n\nThe `apply` and `call` methods on `Function.prototype` allow us\nto execute functions with explicitly set parameters and `this` value.\n\n```javascript\n  function f(x) { return x * (this.y + this.z); }\n  const useAsThis = { y:1, z: 2 };\n  const parameter1 = 5;\n\n   // executes the function with context as the \"this\" argument\n  f.call(useAsThis, parameter1, parameter2);\n\n  // executes the function with context as the \"this\" argument\n  f.apply(useAsThis, [parameter1, parameter2]);\n```\n---\n\n## Patterns\n---\n\n### IEFE\n\nThis pattern is going out of style due to proper module semantics\nin the new versions of JavaScript\n\n```javascript\n// the IEFE pattern:\n// declare a function and execute it immediately\n(function () {\n  var data = getData();\n  superCoolLibrary.render(data);\n}());\n```\n---\n\n### Pseudo-modules\n\nThis pattern is going out of style due to proper module semantics\nin the new versions of JavaScript\n\n```javascript\n// this is an old module pattern:\n// assign the result of an IEFE to a variable\n// variables in the IEFE's scope are private to the module\nvar myModule = (function () {\n  var privateVar = 'private';\n\n  return {\n    publicMethod() {\n      return privateVar;\n    }\n  };\n}());\n\nmyModule.publicMethod(); // \"private\"\nmyModule.privateVar // undefined\n```\n---\n\n### Higher Order Functions\n\nHigher order functions are the bread and butter of functional programming\n\n```javascript  \n  array.filter(element => isValid(element));\n\n  setTimeout(function () {\n    console.log(\"this is a callback\");\n  }, 1000);\n\n  http.createServer((request, response) => {\n    response.send('hello world!');\n  });\n```\n---\n\n### Currying\n\n```javascript\n  // Currying\n  function name(family) {\n    return function (personal) {\n      return `${personal} ${family}`;\n    }\n  }\n  // with an arrow function\n  const name = family => personal => `${personal} ${family}`;\n\n  // usage\n  const simpson = name('Simpson');\n  const homer = simpson('Homer');\n  const marge = simpson('Marge');\n  const bart = name('Simpson')('Bart');\n```\n---\n\n### Bind\n```javascript\n  function name(family, personal) {\n    return `${personal} ${family}`;\n  }\n\n  const magy = name('Simpson', 'Magy');\n\n  // bind returns a new function\n  // first argument will be used for \"this\"\n  const simpson = func.bind(null, 'Simpson');\n\n  const lisa = simpson('Lisa');\n```\n---\n\n## Links\n\n- [Factory functions patterns](https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1)\n- [the Y combinator function](https://dev.to/simov/anonymous-recursion-in-javascript)\n"}}]);
//# sourceMappingURL=20.e09a3579.chunk.js.map