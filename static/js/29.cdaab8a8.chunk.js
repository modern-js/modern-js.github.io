(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{909:function(t,n){t.exports="# Prototypes\n\nJavaScript implements a prototype-based inheritance model.\nEach object has a special prototype field that points directly\nto another object (NOT a class).\n---\n\n## The hidden link\n\n- An object literal has its prototype set to `Object.prototype`\n- An array literal has its prototype set to `Array.prototype`\n\n```javascript\n  Object.getPrototypeOf(\"string\") === String.prototype // true\n  Object.getPrototypeOf(12345678) === Number.prototype // true\n\n  Object.getPrototypeOf({ a: 1 }) === Object.prototype // true\n  Object.getPrototypeOf([ 1, 2 ]) === Object.prototype // false\n\n  Object.getPrototypeOf([ 1, 2 ]) === Array.prototype // true\n```\n---\n\n## Prototype chain\n\nAll objects inherit from `Object.prototype`\n\n```javascript\nObject.getPrototypeOf([]) === Array.prototype\n// true\n\nObject.getPrototypeOf(Array.prototype) === Object.prototype\n// true\n\nObject.getPrototypeOf(Object.prototype)\n// null\n```\nNote: `Object.getPrototypeOf` should not be used in application code\n\n---\n\n### Setting the prototype of an object\n\n```javascript\n  function Person(name) {\n    this.name = name;\n    this.age = 0;\n  }\n\n  function Juggler(name) {\n    this.name = name;\n    this.hobby = 'juggling';\n  }\n\n  Juggler.prototype = new Person();\n\n  const misho = new Juggler();\n  misho.age // 0\n```\n\n---\n\n### Object.create(prototype)\nES5 introduced this easier way to create objects with a specific prototype\n```javascript\n  const protoJuggler = { hobby: 'juggling' };\n  const juggler = Oject.create(protoJuggler);\n\n  const nonInheritingObject = Object.create(null);\n```\n\n---\n\n### Deep property access\n\n- If a property is missing on the target object\nthe engine will search for it down the prototype chain.\n- Overwriting the value of a missing property, creates that property\non the target object, without modifying any prototypes.\n\n```javascript\n  const a = { x: 50 };\n  const b = Object.create(a);\n\n  b.x // 50\n\n  b.x = 100;\n  a.x // 50\n```\n\n---\n\n### Runtime dynamic prototypes\n\nPrototypes are alive! Changing the prototype changes what inheriting objects return.\n```javascript\n  const protoPerson = {\n    sayHi() { return `Hi, I'm ${this.name}`}\n  };\n\n  // also accepts an object of property descriptors\n  // similarly to Object.defineProperties\n  const misho = Object.create(\n    protoPerson, { name: { value: 'Misho' } }\n  );\n  misho.sayHi(); // \"Hi, I'm Misho\"\n\n  protoPerson.sayHi = function () {\n    return 'I forgot my name';\n  };\n  misho.sayHi(); // \"I forgot my name\"\n```\n"}}]);
//# sourceMappingURL=29.cdaab8a8.chunk.js.map