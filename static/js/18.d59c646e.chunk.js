(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{902:function(n,e){n.exports='# Conditionals\n\n---\n## comparators\n\n_Style guide: use strict comparisons_\n\n```javascript\n  a == b;\n  a === b;\n\n  a != b;\n  a !== b;\n\n  a > b;\n  a >= b;\n\n  a < b;\n  a <= b;\n\n  // there are no strict versions of > and <\n```\n\n---\n## logical operators\n\n```javascript\n  // logical operators return values (not Booleans)\n  a && b; // logical AND; short circuit\n  a || b; // logical OR; short circuit\n\n  // use AND to guard against null / undefined\n  doSomething(myObject && myObject.myProperty);\n  myObject && myObject.doSomething && myObject.doSomething();\n\n  // use OR to set a default value\n  sumNumbers(numbers || []);\n  (myObject || defaultObject).doSomething();\n```\n\n---\n## False-y values\n\n- `false`\n- `undefined`\n- `null`\n- `0`\n- `NaN`\n-  `""` empty string\n\n---\n## if\n\n```javascript\n  if (condition) {\n    // the following "else" forms are equivalent\n  } else {\n    if (check) {\n\n    }\n  } else if (fallback) {\n\n  }\n```\n\n---\n## ternary\n\n```javascript\n  const result = condition ? resultIfTrue : resultIfFalse;\n```\n\n---\n## switch\n\n```javascript\n  switch (condition) {\n    case value1:\n      doStuff();\n      break;\n    case value2:\n      doOtherStuff();\n      evenMoreStuff();\n      break;\n    default:\n      doDefaultStuff();\n  }\n```\n\n---\n## Pattern matching proposal\n\n```javascript\n  case (expression) {\n    when [a, b, ...c] -> useArray(a, b, c)\n    when { name, age } -> useObject(name, age)\n    when _ -> { throw new Error(); }\n  }\n```\nSee [Pattern matching proposal](https://github.com/tc39/proposal-pattern-matching)\n---\n\n## Links\n\n- [Comparison table](https://dorey.github.io/JavaScript-Equality-Table/)\n'}}]);
//# sourceMappingURL=18.d59c646e.chunk.js.map