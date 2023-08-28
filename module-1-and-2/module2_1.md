# Intro to Java Script



# Module 2

## Arrays, Objects and Functions

invoke the function = call the function

```js
function myFunc(a, b) {
	var c = a + b;
	return c;
}

c = myFunc(2, 3);
```

```js
// arrays  - analog in Python - lists 
var train1 = [ ];
var train1 = ["wheat", "barley", "potato", "salt", "rocks"];
train1.length;
```

JavaScript also supports slicing similar to Python. 

```js
const originalArray = [1, 2, 3, 4, 5];

// Slicing in JavaScript
const slicedArray = originalArray.slice(1, 4); // Returns [2, 3, 4]

console.log(slicedArray);
```

### Objects

```js
// objects  key:value pair
// analog in Python - dictionaries
// dot notations to add or update key-value
var storeManager = {}
storeManager.rangeTilesPerTurn = 4;
storeManager.socialSkills = 50;
storeManager.streetSmarts = 50;
storeManager.health = 30;
storeManager.specialAbility = "finding business opportunities";
storeManager.greeting = "Let's make some money";

var assistantManager = {
    movement: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40
}
```

Object literals and the brackets notation

```js
var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
```

With the brackets notation, I can add space characters inside property names. Additionally, I can add numbers (as the string data type) as property keys.

```js
car["number of doors"] = 4;
console.log(car); // {color: 'green', speed: 100, number of doors: 5}

car["2022"] = 1901;
console.log(car); // {2022: 1901, color: 'green', speed: 100, number of doors: 5}
```

Finally, there's one really useful thing that bracket notation has but is not available in the dot notation: It can **evaluate expressions**.

```js
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}
```

### Arrays are Objects

In JavaScript, arrays are objects. That means that arrays also have some built-in properties and methods.

```js
// to add new items to an array 
var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']

// to remove the last item from an array
fruits.pop();
console.log(fruits); // ['apple']
```

### Strings methods

In the world of JavaScript, it can often be said that strings behave like arrays as strings are array-like.

```js
// for all examples of this chapter 
var greet = "Hello, ";
var place = "World"

greet.length; // 7
```

**CharAt()** method reada each individual character at a specific index in a string

The **concat()** method joins two strings: 

```js
greet.charAt(0); // 'H' 
"Wo".concat("rl").concat("d"); // 'World'
```

The **indexOf** returns the location of the first position that matches a character. The **lastIndexOf** finds the last match, otherwise it works the same as indexOf.

```js
"ho-ho-ho".indexOf('h'); // 0
"ho-ho-ho".indexOf('o'); // 1
"ho-ho-ho".indexOf('-'); // 2
```

The **split** method chops up the string into an array of sub-strings:

```js
"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']
```

Upper and Lower

```js
greet.toUpperCase(); // "HELLO, "
greet.toLowerCase(); // "hello, "
```

### Object Methods

```js
var car = {};
car.color = "red"; //update the value of a property of the car objject

//add a method to the car object so that it can be called as car.turnkey()
car.turnkey = function() {
    console.log('engine running');
}
```

### TypeOf operator

```js
var test = typeof('what is this?');
var test = typeof(10);
```

### Template strings in JS (ChatGPT)

The backticks ` (backticks) are used to create template strings in JavaScript. Template strings provide a more convenient way to insert variables and expressions into string literals.

Benefits of using template strings:

1. **Variable Interpolation:** Allow you to insert variable values and expressions directly inside strings, making the code more readable.
2. **Multiline Strings:** Allow you to create multiline strings without needing to use `\n` for line breaks.
3. **No Need for Escaping:** Inside template strings, you can use single quotes (`'`) and double quotes (`"`) without the need for escaping.

```js
// Regular string with concatenation
console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old.");

// Template string
console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
```

Please note that template strings work in modern JavaScript versions (ES6 and above).
