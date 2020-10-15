(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{883:function(n,e){n.exports="# Events\n---\n\n## DOM Events\n\nDOM events represent interactions from the user or the browser APIs.\n\n### Listening for events\n```javascript\n  const button = document.getElementById('btn1');\n\n  button.addEventListener('click', function (clickEvent) {\n    console.log({ element: this, clickEvent });\n  });\n```\n---\n\n### Triggering Events\n```javascript\n  const button = document.getElementById('btn1');\n\n  var aClick = new MouseEvent('click', {\n    'view': window,\n    'bubbles': true,\n    'cancelable': true\n  });\n\n  button.dispatchEvent(aClick);\n```\n---\n\n### Event propagation / delegation\n\nEvent bubbling means that event targeted at child nodes\nwill execute the event handlers of the chain of parent nodes.\n\n```html\n  <h1>Select your favorite color:</h1>\n  <ul id=\"colors\">\n    <li>Green</li>\n    <li>Blue</li>\n    <li>Red</li>\n  </ul>\n  <script>\n    document.getElementById('colors')\n      .addEventListener(\n        'click',\n        (event) => console.log(event.target.innerText)\n      );\n<\/script>\n```\n---\n\n## Custom Events in Browser\n\n```javascript\n  // Listening for events on a DOM element (e.g. document)\n  document.addEventListener(\n    'myCustomEvent',\n    function ({ detail }) => console.log(detail)\n  );\n\n  // Trigger the event\n  const myEvent = new CustomEvent(\n    'myCustomEvent',\n    { detail: 'custom properties' }\n  );\n\n  document.dispatchEvent(myEvent);\n```\n---\n\n## Events in NodeJS\n\n```javascript\n  const EventEmitter = require('events').EventEmitter;\n  const source = new EventEmitter();\n\n  source.on('eventName', callback);\n  source.once('eventName', callback);\n\n  source.emit('eventName', payload);\n```\n---\n\n## WebSockets\n\n```javascript\n  websocket.on('connection', socket => {\n    socket.emit('hello');\n    socket.on('message', console.log);\n  });\n```\n---\n\n## Patterns\n\nEvents are a great mechanism to implement various patterns.\n---\n\n### Fan-out\nAn event with a single producer and multiple consumers.\n```javascript\n  // these can be defined in different parts of the system\n  btn.on('click', updateUI);\n  btn.on('click', updateDB);\n  btn.on('click', logsAndMetrics);\n```\n---\n\n### Fan-in\nAn event with a multiple producers and (possibly) a single consumers.\n```javascript\n  // multiple players fire the same event\n  lobby.emit('ready', player);\n\n  //the lobby module pairs players in games\n  lobby.on('ready', startWithTwoPlayers);\n```\n---\n\n### Pub/Sub\nA \"hub\" with multiple topics. Events are a natural implementation of the pub/sub pattern.\n\nIt allows us to decouple the producers and consumers (publishers and subscribers) of a messaging system.\n\n```javascript\n  topics.on('new-items', handleNewItem);\n  topics.on('my-message', handleMyMessage);\n  topics.on('item-order', handleItemOrder);\n\n  topics.emit('new-item', { name: \"Laptop\", price: 873.50 });\n  topics.emit('item-order', { item, client });\n```\n"}}]);
//# sourceMappingURL=3.32de24df.chunk.js.map