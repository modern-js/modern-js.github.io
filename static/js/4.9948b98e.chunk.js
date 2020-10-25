(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{888:function(n,e){n.exports="## Generators\n\n```javascript\n  function* generateNumbers() {\n    let i = 0;\n    while (true) {\n      i += 1;\n      yield i;\n    }\n  }\n\n  const numbers = generateNumbers();\n  numbers.next() // { value: 0, done: false }\n  numbers.next() // { value: 1, done: false }\n  numbers.next() // { value: 2, done: false }\n```\n---\n\n## Generator pattern\n\nUsing a regular closure instead of a state machine.\n\n```javascript\n  function generateNumbers() {\n    let i = 0;\n    return {\n      next() {\n        i += 1;\n        return { value: i, done: false};\n      }\n    }\n  }\n```\n---\n\n## 2way channel\n\n```javascript\n  function* generateNumbers() {\n    let number = 0;\n    let increment = 1;\n    while (true) {\n      increment = (yield number) || 1;\n      number += increment;\n    }\n  }\n\n  const numbers = generateNumbers();\n  numbers.next() // { value: 0, done: false }\n  numbers.next(5) // { value: 5, done: false }\n  numbers.next(5) // { value: 10, done: false }\n```\n---\n\n## Iterators\n\n```javascript\n  const numbers = {\n    [Symbol.iterator]() {\n      return generateNumbers();\n    }\n  };\n\n  for (let n of numbers) {\n    console.log(n);\n  }\n```\n---\n\n## Links\n\n- [Article about iterables](https://advancedweb.hu/2017/09/05/iterables_js/)\n"}}]);
//# sourceMappingURL=4.9948b98e.chunk.js.map