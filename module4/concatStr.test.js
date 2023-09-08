
const { default: TestRunner } = require("jest-runner")
const concatStrings = require('./concatStr');

expect(concatStrings("abc", "def")).toBe("abcdef");
expect(concatStrings("1", "2")).toBe("12")