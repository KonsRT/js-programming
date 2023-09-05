## JavaScript in the Browser

### JavaScript modules

All functions defined on the windows objects are global. Problems with overriding function with the same name. 

Common JS as a solution

**CommonJS** is designed to specify how modules should work outside of the browser environment. It is mostly used on server side JavaScript namely node.js. A downside of CommonJS is that browsers don't understand its syntax. That is certain keywords that CommonJS relies on, such as `require` and `module.exports` don't work as expected in browsers

**ES6 modules working examples** 

`regular-script.html` - old-school example

`es6module-scripts.html` and `greetings.js` - example with modules. 

Browser blocks script because of *Cross origin requests are only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted*. 

To escape this error html file should be run on the local server. 

### JavaScript DOM manipulation

You can think of the DOM like a TV remote that lets you change the webpage content on the screen. 

**DOM tree structure** - HTML file is mapped out like a tree structure with nested objects for different parts of the page. 

A browser builds a DOM, or a model, for every wepbage it downloads as a JS object in your browser memory. 

Every change made to the DOM are relative to the browser's local copy of the webpage. 

```js
// example.com - F12 (open console)
const h2 = document.createElement('h2'); //in js memory
h2.innerText = 'this is h2 heading'
h2.setAttribute('id', 'sub-heading') 
h2.setAttribute('class', 'secondary') 
h2 // test if the code is correct
document.body.appendChild(h2)
```

JavaScript's initial purpose was to **provide interactivity in the browser**. 

### JavaScript selectors

JavaScript selectors work with the document object which you can access by typing the keyword `document`. This returns the webpage stored in the browser's memory known as the document object model or DOM. 

Finding specific objects in a document

```js
// in browser console one by one 
document.querySelector('p')
document.querySelector('a')
document.querySelectorAll('p')
// singular fir id, plural for class name 
document.getElementById('heading')
document.getElementsByClassName('txt')
```

### Event handling

User triggered events. In JavaScript, the function that handles captured events is known as the **event handler**.

Add event listener method

```js
// in browser console one by one 
const target = document.querySelector('body')
function handleClick() {
    console.log('Clicked the body') 
}
target.addEventListener('click', handleClick)
```

Now when click on page:

![](noteimgs\01.png)

An alternative way to listen for events is by using HTML event attributes

```js
// in browser console one by one 
function handleClick2() {
    console.log('click the heading')
}
```

Go to Elements and change html: 

```html
<h1 onclick="handleClick2()">Example Domain</h1>
```

![](noteimgs\02.png)

### Exercise: Web page content update

To capture user input, you can use the built-in prompt() method

This is probably the quickest and easiest way to capture user input on a website, but doing it this way is not the most efficient approach, especially in more complex scenarios.

```js
let answer = prompt('What is your name?');
if (typeof(answer) === 'string') {
	var h1 = document.createElement('h1')
	h1.innerText = answer;
	document.body.innerText = '';
	document.body.appendChild(h1);
}
```

You can code a script which will take an input from an HTML form and display the text that a user types in on the screen.

```js
var h1 = document.createElement('h1')
h1.innerText = 'Type into the input to make this text change'

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    h1.innerText = input.value
})
```

### JavaScript Object Notation - JSON

Thus, the two major reasons for the JSON format becoming the dominant data interchange format that it is today is two-fold:

- First, it's very lightweight, with syntax very similar to "a stringified JavaScript object". You'll learn more about the specifics of this later.
- Second, it's easier to handle in JavaScript code, since, JSON, after all, is *just JavaScript.*

JSON can work with some primitives and some complex data types:

- primitive values: strings, numbers, bolleans, null
- complex values: objects and arrays (no functions!)
- Objects have double-quoted strings for all keys
- Properties are comma-delimited both in JSON objects and in JSON arrays, just like in regular JavaScript code
- String properties must be surrounded in double quotes.

You can use object literals and array literals, as long as you follow the above rules

```js
// from JSON
'{"greeting":"hello"}'
const jsonStr = '{"greeting":"hello"}'
JSON.parse(jsonStr)
const aPlaneObj = JSON.parse(jsonStr)
aPlaneObj.greeting = 'hi'

// to JSON
const data = {
    firstName: "John", 
    lastName: "Doe",
    greeting: "Hello",
}
JSON.stringify(data)
```

# Additional resources

Here is a list of resources that may be helpful as you continue your learning journey.

[MDN: Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

[Nodejs.org official docs on CommonJS](https://nodejs.org/api/modules.html#modules-commonjs-modules)

[MDN: DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

[MDN: Document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

[MDN: Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)

[MDN: EventTarget.addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

[MDN: Working with JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) 
