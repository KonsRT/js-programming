# Constructors

JavaScript has a number of built-in object types, such as:

**Math**, **Date**, **Object**, **Function**, **Boolean**, **Symbol**, **Array**, **Map**, **Set**, **Promise**, **JSON**, etc.

These objects are sometimes referred to as "native objects".

> Конструкторы в JavaScript представляют собой специальные функции, которые используются для создания и инициализации новых объектов. Они являются основой для объектно-ориентированного программирования в JavaScript.

Constructor functions, commonly referred to as just "constructors", are special functions that allow us to build instances of these built-in native objects. All the constructors are capitalized.

To use a constructor function, I must prepend it with the operator **new**.

For example, to create a new instance of the **Date** object, I can run: **new Date()**. What I get back is the current datetime, such as:

**Thu Feb 03 2022 11:24:08 GMT+0100 (Central European Standard Time)** 

However, not all the built-in objects come with a constructor function. An example of such an object type is the built-in **Math** object.

Running **new Math()** throws an **Uncaught TypeError**, informing us that **Math is not a constructor**.

Thus, I can conclude that some built-in objects do have constructors, when they serve a particular purpose: to allow us to instantiate a specific instance of a given object's constructor. The built-in **Date** object is perfectly suited for having a constructor because each new date object instance I build should have unique data by definition, since it's going to be a different timestamp - it's going to be built at a different moment in time.

Other built-in objects that don't have constructors, such as the **Math** object, don't need a constructor. They're just static objects whose properties and methods can be accessed directly, from the built-in object itself. In other words, there is no point in building an instance of the built-in **Math** object to be able to use its functionality.

For example, if I want to use the pow method of the Math object to calculate exponential values, there's no need to build an instance of the Math object to do so. For example, to get the number 2 to the power of 5, I'd run:

```
Math.pow(2,5); // --> 32
```

There's no need to build an instance of the **Math** object since there would be nothing that needs to be stored in that specific object's instance.

Besides constructor functions for the built-in objects, I can also define custom constructor functions.

Here's an example:

```js
function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}
```

Note that using constructor functions on all built-in objects is sometimes not the best approach. This is especially true for object constructors of primitive types, namely: **String**, **Number**, and **Boolean**.

```js
// using constructor - don't do with 
let apple = new String("apple");
apple; // --> String {'apple'}

// usual way
let pear = "pear";
pear; // --> "pear"
```

The **pear** variable, being a primitive value, will always be more performant than the **apple** variable, which is an object.

Besides being more performant, due to the fact that each object in JavaScript is unique, you can't compare a String object with another String object, even when their values are identical.

In other words, if you compare new String('plum') === new String('plum'), you'll get back false, while "plum" === "plum" returns true. You're getting the false when comparing objects because it is not the values that you pass to the constructor that are being compared, but rather the memory location where objects are saved.

Besides not using constructors to build object versions of primitives, you are better off not using constructors when constructing plain, regular objects.

Instead of **new Object**, you should stick to the object literal syntax: **{}**.



A RegExp object is another built-in object in JavaScript. It's used to **pattern-match strings** using what's known as "Regular Expressions". Regular Expressions exist in many languages, not just JavaScript.

In JavaScript, you can built an instance of the RegExp constructor using **new RegExp**. 

Alternatively, you can use a pattern literal instead of RegExp. Here's an example of using **/d/** as a pattern literal, passed-in as an argument to the **match** method on a string.

```js
"abcd".match(/d/); // null
"abcd".match(/a/); // ['a', index: 0, input: 'abcd', groups: undefined]
```

Instead of using **Array**, **Function**, and **RegExp** constructors, you should use their array literal, function literal, and pattern literal varieties: [], () {}, and /()/.



However, when building objects of other built-in types, we can use the constructor.

Here are a few examples:

```js
new Date();
new Error();
new Map();
new Promise();
new Set();
new WeakSet();
new WeakMap();
```





**ChatGPT: Когда лучше не использовать конструкторы (с примером):**

Иногда использование конструкторов может привести к некоторым проблемам, особенно если они создаются внутри циклов или функций, так как это может привести к созданию одинаковых методов для каждого объекта. Вместо этого, лучше использовать прототипы для определения методов, чтобы избежать повторения.

```js
// Плохой пример: создание метода внутри конструктора
function BadPerson(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет.`);
  };
}

// Хороший пример: определение метода через прототип
function GoodPerson(name, age) {
  this.name = name;
  this.age = age;
}

GoodPerson.prototype.sayHello = function() {
  console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет.`);
};

const goodPerson = new GoodPerson("Мария", 28);
goodPerson.sayHello(); // Вывод: Привет, меня зовут Мария и мне 28 лет.

```

В хорошем примере метод `sayHello` определен через прототип, что позволяет избежать создания одинаковых методов для каждого объекта, сэкономив память и улучшая производительность.