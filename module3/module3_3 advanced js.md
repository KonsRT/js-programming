

# Advanced JavaScript Features

## De-structuring arrays and objects

The **destructuring assignment** syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

```js
const [a, b] = array;
const { a, b } = obj;
// etc 
```

```js
let {PI} = Math;
PI

const obj = { a: 1, b: 2 };
const { a, b } = obj;
// is equivalent to:
// const a = obj.a;
// const b = obj.b;
```

```js
let a, b, rest;
[a, b] = [10, 20];
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);
// Expected output: Array [30, 40, 50]
```

## For of loops and objects

The `for...of` loop is designed to iterate over the values of **iterable** objects like arrays, strings, maps, sets, etc., but **not regular objects**.

```js
const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}
```

There are 3 built-in methods for *to loop over objects*: **Object.keys()**, **Object.values()**, and **Object.entries()**.

```js
const car3 = {
    speed: 300,
    color: "yellow"
}

console.log("Array of keys: ", Object.keys(car3), 
            "Array of values: ", Object.values(car3))

// the values that get returned are 2-member arrays nested inside an array
console.log(Object.entries(car3))
```

```js 
var closingItem = {
    price: 50, 
    color: 'beige', 
    material: 'cotton',
    season: 'autumn'
}

for (key of Object.keys(closingItem)) {
    console.log(key, ":", closingItem[key])
}
```

let's code a function declaration that randomly assigns either the string speed or the string color to a variable name, and then build an object that has only two keys: a speed key and a color key.

```js
function testBracketDynamicAccess() {
    var dynamicKey;
    if (Math.random() > 0.5) {
        dynamicKey = 'speed';
    } else {
        dynamicKey = 'color';
    }

    var drone = {
        speed : 15,
        color: 'orange'
    }
    console.log(drone[dynamicKey])
}

testBracketDynamicAccess();
```

## For-in and for-of differences

Цикл `for...in` используется для перебора **свойств** объекта. Он перебирает все **перечислимые** свойства объекта, включая свойства, наследуемые от прототипа. Помимо перечислимых свойств, цикл `for...in` также перебирает некоторые встроенные свойства объекта и свойства прототипа, если они не были правильно скрыты.

Цикл `for...of` используется для перебора **значений** итерируемых объектов, таких как массивы, строки, наборы (Sets), карты (Maps) и другие. Он не перебирает свойства объекта, а только значения его элементов. 

Цикл `for...of` удобен для работы с элементами коллекций, так как он автоматически обходит только сами элементы, не требуя явного обращения к индексам.

```js
const car = {
    engine : true,
    streeting : true,
    speed: 'slow'
}
const sportCar = Object.create(car);
sportCar.speed = 'fast'
console.log('The sportCar object: ', sportCar);

console.log('----- for-in is unreliable -----')
for (prop in sportCar) {
    console.log(prop);
}
console.log('🤒', 'Itarating over object AND its prototype!')

console.log('----- for-of is reliable -----');
for (prop of Object.keys(sportCar)) {
    console.log(prop + ": " + sportCar[prop] );
}
console.log("😎", "Iterating over object's OWN PROPERTIES only!");
```

## Data Structures 

Objects, Arrays, Maps, Sets

It's important not to confuse a map with an object. With **maps** any value can be used as a key. With **objects**, keys can only be strings or symbols.

**Map**: Key-value pair -> hash function -> Hash table

**Sets**: collection where each item in the collection must be unique

if you try to add a non unique item to a set, this operation will simply not be run. With no errors. 

```js
const house1 = 'red'
const house2 = 'blue'
const house1 = 'red'
const house = new Set()
houses.add(house1).add(house2).add(house3)
console.log(houses) // Set(2){'red,'blue'}
```

Let's consider 3 specific methods that exist on arrays: **forEach**, **filter**, **map**

## Working with Arrays in JavaScript

### The forEach() method

The **forEach()** method accepts **a function that will work on each array item**. That function's first parameter is the current array item itself, and the second (optional) parameter is the index. 

Very often, the function that the **forEach()** method needs to use is passed in directly into the method call, like this:

```js
const veggies = ['onion', 'garlic', 'potato']
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`)
});
```

This makes for more compact code, but perhaps somewhat harder to read. To increase readability, sometimes **arrow functions** (=>) are used. 

### The filter() method

The **filter()** method filters your arrays **based on a specific test**. Those array items that pass the test are returned.

```js
const nums = [0, 10, 20, 30, 40, 50];

nums.filter( function(num) {
    return num > 20;
}); // [30, 40, 50]
```

Similar to the forEach() method, the **filter()** method also accepts a function and that function performs some work on each of the items in the array.

### The map method

This method is used to map each array item over to another array's item, based on whatever work is performed inside the function that is passed-in to the map as a parameter. 

```
[0, 10, 20, 30, 40, 50].map( function(num){
    return num/10;
}); //[1, 2, 3, 4, 5]
```

## Working with Objects in JavaScript

```js
// convert an object to an array
const resuult = [];
const drone = {
    speed: 100, 
    color: 'yellow'
};
const droneKeys = Object.keys(drone);
droneKeys.forEach(function(key){
    resuult.push(key, drone[key]);
});
console.log(resuult);
```

Although this is possible and works, having to do something like this might mean that you haven't chosen the correct data structure to work with in your code.

## Working with Maps in JavaScript

A map can feel very similar to an object in JS. However, it doesn't have inheritance. No prototypes! This makes it useful as a data storage.

```js
let bestBoxers = new Map();
bestBoxers.set(1, 'The Champion');
bestBoxers.set(2, 'The Runner-up');
bestBoxers.set(3, 'the third-place');

console.log(bestBoxers)
// Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}
```

To get a specific value, you need to use the **get()** method

```js
bestBoxers.get(1);
```

## Working with Sets in JavaScript

A set is a collection of unique values. The **Set** constructor can, for example, accept an array. This means that we can use it to quickly filter an array for unique members.

```js
const repetitiveFruits = ['apple', 'pear', 'apple', 'pear', 'plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);
```

## Other data structures in JavaScript

Besides the built-in data structures in JavaScript, it's possible to build non-native, custom data structures.

These data structures come built-in natively in some other programming languages  or even those other programming languages don't support them natively.

Some more advanced data structures that have not been covered include:

- Queues
- Linked lists (singly-linked and doubly-linked)
- Trees
- Graphs

# Spread operator

It is the shortest and simplest method to copy the properties of an object onto a newly created object. It's used to spread array items and join objects together. 

The spread operator is characterized by three dots.

Use the spread operator to:

- Add new members to arrays without using the `push()` method,
- Convert a string to an array and
- Copy either an object or an array into a separate object

*Recall that the `push()` and `pop()` methods are used to add and remove items from the end of an array.*

```js
let top3 = ['The Colloseum', 'Trevi Fountain','The Vatican City'];

function showItinerary(place1, place2, place3) {
    console.log("Visit ", place1);
    console.log("Then visit ", place2);
    console.log("Finish with visit to ", place3);
}
// not practical way
showItinerary(top3[0], top3[1], top3[2]);

// use spread operator
showItinerary(...top3);
```

Don't need to list each individual members of the array you want to pass to your function.

# Rest operator

A **spread** operator in JavaScript, is used to unpack a box, for example, to unpack an array. The **rest** operator, on the other hand, is used to build a smaller box, and pack items into it.

```js
let top7 = ['The Colloseum', 'the Roman Forum', 'Trevi Fountain',
    'The Vatican', 'The Pantheon','Piaza Venezia','The Palatine Hill' ];

// destructuring
const [first, second, third, ...secondVisit] = top7;
console.log(first);
console.log(secondVisit);
```

**rest operator with function**

```js
// rest operator with function
function addTaxToPrices(taxRate, ...itemsBought) {
    return itemsBought.map(item => taxRate*item)
}

let shoppingCart = addTaxToPrices(1.1, 46, 89, 35, 79);
console.log(shoppingCart);
```

**More examples** in `module3\SpreadAndRest.js` file

## Additional resources

Here is a list of resources that may be helpful as you continue your learning journey.

[Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) 

[Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) 

[Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) 

[Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) 

[JavaScript data structures](https://data-flair.training/blogs/javascript-data-structures/)  
