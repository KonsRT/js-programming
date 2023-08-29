

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

```
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

