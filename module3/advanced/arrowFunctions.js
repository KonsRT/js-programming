//  decompose a traditional anonymous function down to the simplest arrow function step-by-step

(function(a) {
    return a + 100;
});

(a) => {
    return a + 100;
};

(a) => a + 100;

a => a + 100;

// ! The parentheses can only be omitted if the function has a single simple parameter

// Traditional anonymous function
(function (a, b) {
    return a + b + 100;
});

// Arrow function
(a, b) => a + b + 100;

const a = 4;
const b = 2;

// Traditional anonymous function (no parameters)
(function () {
    return a + b + 100;
});

// Arrow function (no parameters)
() => a + b + 100;

// ! The braces can only be omitted if the function directly returns an expression.
// Traditional anonymous function
(function (a, b) {
    const chuck = 42;
    return a + b + chuck;
});

// Arrow function
(a, b) => {
    const chuck = 42;
    return a + b + chuck;
};