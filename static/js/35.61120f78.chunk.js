(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{915:function(n,e){n.exports="# Bundlers\n\n- given a starting point\n- walk the graph of dependencies\n- transform code through plug-ins\n- output a single file (bundle)\n---\n\n## Webpack\n\n- loaders\n- plug-ins\n- tree shaking\n- code splitting\n- async loading\n\nDocs: https://webpack.js.org/\n---\n\n### Entry point(s)\n\nSingle entry point:\n```javascript\n/* webpack.config.js */\nmodule.export = {\n  entry: '/path/to/index.js'\n};\n```\n---\n\nMultiple entry points:\n```javascript\n/* webpack.config.js */\nmodule.export = {\n  entry: {\n    app: '/path/to/app.js',\n    vendor: '/path/to/vendor.js'\n};\n```\n---\n\n### Single output\n\nSingle bundle:\n```javascript\n/* webpack.config.js */\nmodule.export = {\n  output: {\n    filename: 'bundleName.js',\n    path: '/path/to/save/bundle'\n};\n```\n---\n### Multiple outputs\n\nMultiple bundles:\n```javascript\n/* webpack.config.js */\nmodule.export = {\n  output: {\n    filename: '[id]-[name]-[chunckhash]-[hash].js',\n    path: '/path/to/save/bundle'\n};\n```\n---\n\n### Loaders\n\nLoaders allow us to preprocess files\n```javascript\n/* webpack.config.js */\nmodule.exports = {\n  module: {\n    rules: [\n      { test: /\\.css$/, use: 'css-loader' },\n      { test: /\\.js$/, use: 'babel-loader' }\n    ]\n  }\n};\n```\n---\n\n### Plugins\n\nPlugins can hook into any step in the process\n```javascript\n/* webpack.config.js */\nmodule.exports = {\n  plugins: [\n    new webpack.optimize.UglifyJsPlugin()\n  ]\n};\n```\n---\n\n## Other bundlers\n\n- RequireJS cli\n- Browserify\n- Rollup\n"}}]);
//# sourceMappingURL=35.61120f78.chunk.js.map