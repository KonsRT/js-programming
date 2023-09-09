# Module 4 - Testing

## Other JavaScript environments - node & NPM

Before the introduction of Node.js, developers had to build backends in other technologies and languages such as PHP, Python, C-sharp, Ruby, and Java. 

After **Node.js** became available, it was possible to use JavaScript on the backend or on the server-side. This means that today you can write full-stack JavaScript programs

Back-end / Server 

```js
var http = require('hhtp');

http.createServer(function(req,res) {
	res.writeHead(200);
	res.end('Hello World');
}).listen(8080);
```

**Node.js** comes with a package manager called **npm**, which stands for **Node Package Manager**. The package manager allows you to use a large number of libraries and frameworks as Node.js modules. 

An npm module is a standalone piece of code that has been published on the npm website. Sometimes an npm module is also referred to as an npm package.

`node -v` - node.js version

`npm -v` - npm version

`node app.js` - run js file 

`npm install lower-case` - install lower case module

```js
import { lowerCase, localeLowerCase } from "lower-case";
lowerCase("Word"); //=> "word"
```

start new project 

```
npm init
{
"name": "my-awesoma-package",
"version": :"1.0.0"
}
```

`package.json` - a file created after you run the PM init command

The `package.json` file holds all the instructions on all the node modules that are pulled from the npm repository of open source modules.

```
npm i react 
npm i webpack
npm i bootstrap-vue
npm i @angular/core
```

The `package.json` file updates when you install a new package. It keeps track of everything you need to have installed in your project

## What is testing?

```js
function concatStrings(strA, strB) {
    return strA + strB;
}

concatStrings('abc', 'dfg'); 
concatStrings(1,2); //-> 3
```

JavaScript testing Frameworks 

**Test as expectation - documenting code**. Code syntax specifies the expected result  of passing specific values to your functions. 

```
expect(concatStrings('abc', 'def')).toBe('abcdef')
```

Testing code in this way **ensures three things**: Conciseness, Clarity, Repeatability

**Refactoring** - updating code, without affecting the result it produces.

Red-green-refactor cycle

**TDD**: Write failing test -> R-write code to pass -> Optimize code without changing its results

## Types of testing

**Testing** - confirming that software works as specified in the software's requirements. 

**UX designer** - making sure that the website looks and behaves as expected

**Project manager** - a specific piece of software works well with other parts of your system

**Software engineer** - writing code that doesn't break the existing functionality, is bug free and satisfies the requirements as set out in a given task based on what your motivations are

**Types of testing and testing frameworks for them** 

**End to end testing** (e2e) - slow and time consuming

* WebdriverJS
* Protractor
* Cepress

**Integration testing** - how separate parts of your app works together. Faster and cheaper then e2e

* React testing library 
* Enzyme

**Unit testing** - the process of testing the smallest units of your source code in isolation. Self-contained, fast to run and easy to write. 

**Unit** - the smallest piece of code that you can test separately from the rest of the app. Usually a function or a method. 

**Testing pyramid**: Unit tests - Integration tests - e2e tests

## JEST

The features of the Jest framework, code coverage, mocking, and snapshot testing.

Libraries for testing: Jasmine, Mocha, Karma, qUnit

**Jest testing framework** - built by Meta. 

* It can test: Babel, TypeScript, Node, Angular, Vue. 
* Supports Code Coverage (% of code is covered by tests)

**Mocking** - allows you to separate the code that you are testing from it's related dependencies (to make sure that your unit testing is stand-alone). 

> Mocking (мокирование) - это техника в программировании, которая используется для создания фиктивных (или "поддельных") объектов или модулей, чтобы имитировать поведение реальных компонентов системы в целях тестирования. Главная цель мокирования - изолировать код, который вы хотите протестировать, от внешних зависимостей, таких как базы данных, внешние API, или другие сложные компоненты.
>
> В контексте тестирования программного обеспечения, мокирование позволяет создавать имитации объектов или функций, чтобы симулировать их поведение в определенных сценариях, не прибегая к реальным ресурсам. Это полезно, например, для тестирования кода, который взаимодействует с внешними сервисами, необходимо избежать реальных запросов к ним во время тестирования.

Jest 

* in-built mocking functions 
* facilitates asynchronous code 
* snapshot testing 

Snapshot testing is used by developers to verify that there are no regressions in the DOM of our apps after some changes to the code base are made

### Writing tests with Jest

In terminal:

```bash
# init npm in the folder for this project
npm init -y
# install jest localy
npm install --save-dev jest
# run tests in tis folder 
npm run test
```

Jest runs tests for code in your current project to verify the expected output

## TDD 

Test-Driven Development - steamlined process of writing code that will satisfy some requirements

Red - Green - Refactor

![](noteimgs\tdd1.png)

![tdd2](noteimgs\tdd2.png)

**TDD example**

```js
test('returns true if statusOfKeys exists', function() {
	expect(statusOfKeys).toBeDefined()
})
```

test failed - function donesn't exist. write function

```
function statusOfKeys() {}
```

TDD rule: write as little code as possible to make the test pass

```
const statusOfKeys = require('./statusOfKeys');
const spyConsoleLog = jest.spyOn(console,'log');
spyConsoleLog.mockImplementation(keys=> keys)

test('returns true if statusOfKeys exists', function() {
	expect(statusOfKeys).toBeDefined()
})

test('test console log inside statusOfKeys', function() {
	statusOfKeys(true);
	expect(console.log).toBeCalled();
	expect(spyConsoleLog.mock.calls[0][0]).toBe(true);
	spyConsoleLog.mockReset();
	spyConsoleLog.mockRestore();	
})
```

```
function statusOfKeys(keys) {
	console.log(keys);
}
```

# Additional resources

Here is a list of resources that may be helpful as you continue your learning journey.

[MDN: Server-side website programming](https://developer.mozilla.org/en-US/docs/Learn/Server-side)

[Nodejs.org docs website](https://nodejs.org/api/documentation.html)

[Jest testing framework website](https://jestjs.io/)

[Cypress testing framework](https://www.cypress.io/)

[npm website](https://www.npmjs.com/)

[Unit testing in JavaScript](https://www.browserstack.com/guide/unit-testing-in-javascript)

  
