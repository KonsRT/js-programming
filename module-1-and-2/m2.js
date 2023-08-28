// Module 2 - Arrays, Objects and Functions

function myFunc(a, b) {
	var c = a + b;
    return c;
	
}

c = myFunc(2, 3);
console.log(c);

// ! Strings methods
var letters = 'abc';
letters.match(/a/);  // ['a', index: 0, input: 'abc', groups: undefined]
letters.match(/d/); // null


var greet = "Hello, ";
var place = "World"
greet.length; // 7
greet.charAt(0); // 'H' 

"Wo".concat("rl").concat("d"); // 'World'

"ho-ho-ho".indexOf('h'); // 0
"ho-ho-ho".indexOf('o'); // 1
"ho-ho-ho".indexOf('-'); // 2

"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']

greet.toUpperCase(); // "HELLO, "
greet.toLowerCase(); // "hello, "

// ! type of 
var test = typeof('what is this?');

// ! Formatting output 

const a = "a";
const b = "b";
console.log(`${a} and ${b}`);
