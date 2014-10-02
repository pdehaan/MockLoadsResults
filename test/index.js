var makeResults = require("mockloadsresults").makeResults;

var active = makeResults(true, 2); // generates 2 active loads results
var inactive = makeResults(false); // generates 10 (default) inactive loads results

console.log("total active results: %d", active.length); // 2
console.log("total inactive results: %d", inactive.length); // 10

console.log("active results:");
console.log(JSON.stringify(active, null, 2));

console.log("first inactive result:");
console.log(JSON.stringify(inactive[0], null, 2));
