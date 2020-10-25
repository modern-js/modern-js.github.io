(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{900:function(n,t){n.exports="# Async/Await\n\n```javascript\n// async functions return a promise\nasync function getData() {\n  const data = await fetch('url'); // await any promise\n  if (!validate(data)) { throw new Error('bad data'); }\n  return transform(data);\n}\n\n// use try/catch as normal\nasync function render() {\n  try {\n    const data = await getData();\n    display(data);\n  catch (error) {\n    display(error);\n  }\n}\n```\n---\n\n## The problem with loops\n\nWaits for each url to be downloaded\nbefore requesting the next one\n```javascript\nasync function getContent(urls) {\n  const results = [];\n\n  for (url of urls) {\n    const content = await fetch(url);\n    results.push(content);\n  }\n\n  return results;\n}\n```\n---\n\n## Async concurrency\n\nThe requests for all urls start at the same time\n```javascript\nasync function getContent(urls) {\n  return Promise.all(\n    urls.map(url => { return await fetch(url); })\n  );\n}\n```\n"}}]);
//# sourceMappingURL=16.803376b4.chunk.js.map