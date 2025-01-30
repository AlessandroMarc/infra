const assert = require("assert");
const { logHelloEveryTwoMinutes } = require("./index");

// Test to ensure the function is defined
assert.strictEqual(typeof logHelloEveryTwoMinutes, "function");

console.log("All tests passed!");
