// The reason for the forward-slash is to indicate that the function is in the same folder as a test file.
// I've omitted the .js because Node understands what I mean, even if I don't use it.

const { default: TestRunner } = require("jest-runner")
const addFive = require('./addFive');

test('returns the number plus 5', () => {
    expect(addFive(1)).toBe(6);
});