# MockLoadsResults

Mock Loads test results.

## Installing

Install this module from GitHub directly using the following command:
```sh
$ npm i pdehaan/MockLoadsResults -S
```

This should install the `mockloadsresults` module into your local /node_modules/ directory and save it in your package.json file as a dependency.

```json
{
  "name": "loads-tmp",
  "description": "Testing the mock loads data module.",
  "version": "1.0.0",
  "author": "Peter deHaan (http://nodeexamples.com/)",
  "dependencies": {
    "mockloadsresults": "pdehaan/MockLoadsResults"
  },
  "license": "WTFPL",
  "main": "index.js",
  "scripts": {
    "start": "node index",
    "test": "eslint ."
  }
}
```

## Using

Once the `mockloadsresults` module has been installed, you can `require()` it in your app and use the `makeResults()` method to generate some mock "active" and "inactive" test results.
```js
var makeResults = require("mockloadsresults").makeResults;

var active = makeResults(true, 2); // generates 2 active loads results
var inactive = makeResults(false); // generates 10 (default) inactive loads results

console.log("total active results: %d", active.length); // 2
console.log("total inactive results: %d", inactive.length); // 10

console.log("active results:");
console.log(JSON.stringify(active, null, 2));

console.log("first inactive result:");
console.log(JSON.stringify(inactive[0], null, 2));
```

