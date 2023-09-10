# Intro to Java Script

Course 2 of 9 in the Meta Front-End Developer Professional Certificate

# Module 2_2 Error Handling

```js
try {
	console.log(c+d);
} catch(err) {
	console.log(err)
}
```

Another key word that you need to be aware of is that throw keyword. Using the throw keyword, you can force an error to be thrown from the try block to the catch block

```js
try {
	throw new Error();
} catch(err) {
	console.log(err)
}
```

Here are some of **the most common errors** in JavaScript: 

- ReferenceError 
- SyntaxError - it cannot be caught using the try-catch block.  
- TypeError 
- RangeError

There are **some other errors** in JavaScript. These other errors include: 

- AggregateError 
- Error 
- InternalError 
- URIError

**Types of empty values:**

* Null data type 
* Undefined data type
* Empty strings

All functions returns undefined by default. Undeclared variables or empty strings has undefined data type.
