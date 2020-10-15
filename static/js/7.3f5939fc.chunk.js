(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{887:function(n,e){n.exports="# Promises\n---\n\n## Using promises\n\n```javascript\n  // Handle a value once it's available\n  waitForAnswer().then(doSomethingWithIt);\n\n  // Or handle just the error if something goes wrong\n  waitForAnswer().catch(handleError);\n\n  // Or handle both with a second argument to `then`\n  waitForAnswer().then(handleAnswer, handleError);\n```\n---\n\n### Catching errors\n\n`handleError` will catch an exceptions coming\nfrom either `waitForAnswer` or `useAnswer`\n```javascript\n  waitForAnswer()\n    .then(useAnswer)\n    .catch(handleError);\n```\n---\n\n### Handle and continue\n\nIn this case the `catch function` will provide\na default value to the next `then function`\n```javascript\n  waitForAnswer()\n    .catch(logErrorAndDefault)\n    .then(useAnswerOrDefault)\n```\n---\n\n### Chaining\n\nEach call of the `then` method returns a new promise\n```javascript\n  getUserProfile()\n    .then(profile => download(profile.image))\n    .then(profileImage => applyEffects(profileImage))\n    .then(imageWithEffects => saveFile(imageWithEffects))\n    .then(() => console.log('done'))\n    .catch(error => console.error('something went wrong'));\n```\n---\n\n### Fan-out\n\nAdding multiple handlers for the same promise\n```javascript\n  const p1 = waitForAnswer();\n  const p3 = p1.then(answer => answer * 2);\n  const p2 = p1.then(answer => answer / 2);\n  p2.then(console.log);\n  p3.then(console.log);\n```\n---\n\n### Execution order\n\n```javascript\n  setTimeout(() => console.log('A'), 0);\n  console.log('B');\n  Promise.resolve('C').then(c => console.log(c));\n  console.log('D');\n\n  // B D C A\n```\n---\n\n## Creating promises\n\n```javascript\n  const waitOneMinute = new Promise((resolve, reject) => {\n    setTimeout(resolve, 60 * 1000);\n  });\n\n  waitOneMinute.then(doStuff);\n```\n---\n\n## Promise methods\n\n```javascript\n  Promose.resolve(21)\n    .then(number => number * 2)\n    .then(number => console.log(number));\n\n  Promise.reject('Error')\n    .catch(error => {\n      console.log(error);\n    });\n```\n---\n\n## Promise methods\n\n```javascript\n   Promise.all([\n     fetch('myScript.js'),\n     fetch('myStyles.css')\n     fetch('myData.json'),\n   ]).then(([script, styles, data]) => {\n     // all 3 resources are available here\n   });\n\n   Promise.race([\n     fetch('source1/data.json'),\n     fetch('source2/data.json')\n   ]).then(data => {\n     // gets the data from the first source to succeed\n   });\n```\n---\n\n### Promise.try proposal\n\n```javascript\n  Promise.try(() => getAnswerMightThrow())\n  .then(useAnswer)\n  .catch(handleError);\n```\n---\n\n### Ajax with a promise\n\n```javascript\n  const ajax = ({ method = 'GET', url, data = null }) =>\n    new Promose((resolve, reject) => {\n      const xhr = new XMLHttpRequest();\n      xhr.onreadystatechange = () => {\n      if (xhr.state === 4) {\n        if (xhr.error) { reject(xhr.error); }\n        else { resolve(xhr.responseText); }\n      }\n    };\n    xhr.open(method, url); xhr.send(data);\n  });\n```\n"}}]);
//# sourceMappingURL=7.3f5939fc.chunk.js.map