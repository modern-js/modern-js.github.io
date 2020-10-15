(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{902:function(n,e){n.exports='# JSON\n\nJSON stands for JavaScript Object Notation and is a subset of the language.\nIt is intended and used as a data exchange format.\n\n---\n## Syntax\nJSON cannot contian any functions or other behaviours (getters / setters).\nIt is data only and is considered a secure medium for communication.\n\n\nSee [JSON specification](http://www.json.org/)\n\n---\n## JSON parse\n\n```javascript\nconst jsonString = \'{ "id": 0, "message": "hello", "someArray": [1, 2, 3]  }\';\nconst object = JSON.parse(jsonString);\nconsole.log(object.message, object.number, object.someArray);\n\nJSON.parse(100); // returns 100\nJSON.parse("test"); // throws an error\n```\n\n---\n## JSON stringify\n\n```javascript\n  const object = {\n    id: 1,\n    message: \'hello\',\n    myArray: [1, 2, { anotherObject: true }]\n  };\n\n  const jsonString = JSON.stringify(object);\n  const messageOnly = JSOn.stringify(object, [\'message\']);\n```\n\n---\n## Links\n\n[MDN JSON reference](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON)\n'}}]);
//# sourceMappingURL=22.7510908f.chunk.js.map