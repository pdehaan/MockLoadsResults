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

### Output

```sh
$ npm start

> loads-tmp@1.1.0 start /Users/pdehaan/dev/github/MockLoadsResults/test
> node index

total active results: 2
total inactive results: 10

active results:
[
  {
    "active": true,
    "id": "e16f66c6-0bac-8cf6-e35c-7309aa5aa209",
    "test": "turbo.LoopTest.test_all.5",
    "startDate": "2014-10-02T16:05:34.000Z",
    "endDate": null,
    "diff": null,
    "success": null
  },
  {
    "active": true,
    "id": "996af01c-0557-c357-c0cd-aacd0d13713a",
    "test": "champion.LoopTest.test_all.7",
    "startDate": "2014-10-02T19:18:41.000Z",
    "endDate": null,
    "diff": null,
    "success": null
  }
]

first inactive result:
{
  "active": false,
  "id": "4c8f2a70-d071-056b-2b5c-138e5aa9b51e",
  "test": "load.StressTest.test_storage_session.8",
  "startDate": "2014-10-02T00:40:24.000Z",
  "endDate": "2014-10-02T09:31:48.000Z",
  "diff": "8 hours, 51 minutes, 24 seconds",
  "success": false
}
```

