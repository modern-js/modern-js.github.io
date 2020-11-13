(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{916:function(n,e){n.exports='# Types\n\n- Variables don\'t have types.\n- Values have types.\n\n---\n## Primitive types\n\n- boolean\n- string\n- number\n- symbol\n- null\n- undefined\n\n---\n## Complex types\n\n- object\n  - function\n    - class\n  - array\n  - regex\n- _(all complex types are objects)_\n\n\n---\n## The `typeof` operator\n\n```javascript\ntypeof \'abc\' // "string"\ntypeof 123 // "number"\ntypeof 1.23 // "number"\ntypeof NaN // "number"\ntypeof true // "boolean"\ntypeof undefined // "undefined"\ntypeof function () {} // "function"\ntypeof null // "object"\ntypeof [] // "object"\n```\n\nYou should avoid relying on `typeof`\nin your application code.\n\n---\n## Methods and properties of literals\n\nThey inherit properties and methods\nfrom their respective prototypes.\n\n```javascript\n  "hello".length // 4\n  "hello".split(\'\') // [\'h\', \'e\', \'l\', \'l\', \'o\']\n\n  1..toString() // "1"\n  3.14.toString() // "3.14"\n\n  ({ x: 1 }.x) // 1\n  [1, 2, 3].length // 2\n```\n\n---\n## References\n\nPrimitive values are immutable and only create a single instance per value.\n\n```javascript\n  var x = 5; var y = 5;\n  x === y // true\n\n  var s = "ab"; var z = "ab";\n  s === z // true\n```\n\n### Each object is a separate instance\n\n```javascript\n  var x = new Number(2);\n  var y = new Number(2);\n  x === y // false\n\n  [] === [] // false\n  [1, 2, 3] === [1, 2, 3] // false\n\n  {} === {} // false\n  { x: 1 } === { x: 1 } // false\n```\n\n---\n## Values and prototypes\n\n```javascript\n  String.prototype.isPrototypeOf("abc") // true\n\n  Number.prototype.isPrototypeOf(3.14) // true\n  Number.prototype.isPrototypeOf(NaN) // true\n\n  RegExp.prototype.isPrototypeOf(/(\\d+)/) // true\n```\n\n---\n## JIT Optimization\n\nInternally JavaScript engines track the type of the arguments\npassed to every function call in order to optimize performance.\n\n\n---\n## Links\n\n- [Primitive types vs Objects](http://blog.brew.com.hk/not-everything-in-javascript-is-an-object/)\n'}}]);
//# sourceMappingURL=32.36464969.chunk.js.map