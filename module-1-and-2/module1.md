# Intro to Java Script

Course 00 of 00 in the Meta Front-End Developer Professional Certificate

# Module 1

## Setting up and intro 

Install coderunner extension in vs code and install node.js 

**TypeScript** - compiles down to JavaScript

**JavaScript** is one of the most widely available and frequently used methods for interacting with the browser on the client side

**Examples of using JS** 

* Plain (Vanilla) JS on the client side 

* JS frameworks (React, Vue, D3)
* Server side (Node.js  and more recently Deno)

To be a well-rounded developer, you need to learn and master the basics of plain JavaScript without the frameworks. Once you have this foundation, the pathway will become easier for you to learn a framework built on top of JavaScript, such as React.

## JS Basics

### Automatic Semi-Colon Insertion (ASI)

In JavaScript, **the semi-colon** - the ; character is used to clearly delimit parts of the code from some other parts of the code.

Interestingly, the browser has a feature known as "**Automatic Semi-colon Insertion**" - meaning, it does a pretty good job of "filling in the blanks" in case there is a missing semi-colon where there should be one.

Effectively, what that means for developers is that most of the time, it makes no difference if a semi-colon is added or not, since the browser is likely to figure it out anyway.

That's why some developers say that you shouldn't bother with adding semi-colons at all.

However, other developers argue that it's better to use it wherever it's needed - for the sake of clarity.

The truth is that most of the time, you can think of adding semi-colons in JavaScript as optional - and somewhat of a stylistic preference.

### Variables, Data types, Operators

```js
console.log("%cHello, World", "color: blue; font-size: 40px");
```

If you add the **%c** right after the " character, you can then style the console output by adding the , character after the second ", and then, inside another pair of " and " characters, use valid CSS code to style the words you want to output in the console.

```js
// comments in js 
/* multi line comments in js */
var person = "John";
console.log("hi", person);
```

7 primitive types in JS: strring, number, Boolean, null, undefined (var is not yet assigned a value), BidInt, symbol (can be used as unique identifier)

Logical operators 

```js
// && - analog AND
a>5 && a<10 // check for both conditions to be true

// || - analog OR 
a>5 || a>10
// ! - analog NOT 
!(a>5) // false if a >5

// equality and strict equality operators 
console.log(100 == "100", 100 === "100")
// the same with inequality
console.log(1 != "1", 1 !== "1")
```

JavaScript tries to help by converting the numbers to strings, and then **concatenating the number and the string together**, ending up with **a string value**.

The process of this "under-the-hood" conversion of values in JavaScript is referred to as "coercion". JavaScript *coerces* a number value to a string value - so that it can run the + operator on disparate data types.

```js
1 + "2" // return "12"
```

```js
// += and -=
var longString = "";
longString += "Once";
longString += " upon";
```

Operator associativity determines how the precedence works when the code uses operators with the same precedence.

There are two kinds: 

- left-to-right associativity
- right-to-left associativity

For example, the assignment operator is right-to-left associative, while the greater than operator is left-to-right associative:

```js
var num = 10; // the value on the right is assigned to the variable name on the left
5 > 4 > 3; // the 5 > 4 is evaluated first (to `true`), then true > 3 is evaluated to `false`, because the `true` value is coerced to `1`
```

### A few of history

JavaScript as a language is not a completely separate, stand-alone entity. It only exists **as an implementation**. This implementation is known as a **JavaScript engine**.

Traditionally, the only environment in which it was possible to run a JavaScript engine, was the browser. More specifically, a JavaScript engine was just another building block of the browser. It was there to help a browser accomplish its users' goal of utilizing the internet for work, research, and play.

Additionally, the JavaScript engine itself comes with different ways to interact with various other parts of the browser. These are known as Browser APIs.

Although traditionally it was possible to interact with the JavaScript engine only inside of the browser, this all changed in 2009, when **Node.js was built** by Ryan Dahl.

He came up with a way to use a JavaScript engine as a stand-alone entity. Suddenly, it was possible to use JavaScript outside of the browser, as a separate program on the command line, or as a server-side environment.

Today, JavaScript is ubiquitous and is running in browsers, on servers, actually, on any device that can run a JavaScript engine.

## Conditionals and Loops

### Conditionals

```js
var food = "hot";
if (food == "hot") {
console.log("Too hot")
}
else if (foor == "cold") {
console.log("Too cold")
}
else {
console.log("Just right")
}
```

ELSE IF and SWITCH statements 

```js
var place = "first";
switch(place) {
    case "first":
        console.log("Gold");
        break;
    case "second":
        console.log("Silver");
        break;
    case "third":
        console.log("Bronze");
        break;
    default:
        console.log("No medal");
        break;
}
```

### Loop constructs

```js
for (var i = 1; i<4; i++){
	console.log(i);
}

for (var = 10; i >0; i--){
    console.log(i)
}

var i=1;
while (i<4){
    console.log(i);
    i=i+1
}
```

