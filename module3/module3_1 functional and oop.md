# Intro to Java Script

Course 2 of 9 in the Meta Front-End Developer Professional Certificate

# Module 3

## Functional Programming

The Functional Programming paradigm works by keeping the data and functionality separate. It's counterpart, OOP, works by keeping the data and functionality grouped in meaningful objects.

OOP example 

```js
//creating an object
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false
```

It is often said that **functions** in JavaScript are “**first-class citizens**”. \

It means that a function in JavaScript is just another value that we can:

- pass to other functions
- save in a variable
- return from other functions

For example, in JavaScript, it's perfectly normal to pass a function invocation to another function. 

```js
function addTwoNums(a, b) { console.log(a + b) }
function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;
var getNumber;

if(useRandom) { getNumber = randomNum } 
else { getNumber = specificNum }

addTwoNums(getNumber(), getNumber())
```

**Higher-order functions**

A higher-order function is a function that has either one or both of the following characteristics:

- It accepts other functions as arguments
- It returns functions when invoked

There's no "special way" of defining higher-order functions in JavaScript. It is simply a feature of the language. The language itself allows me to pass a function to another function, or to return a function from another function. 

```js
addTwoNums(specificNum, specificNum); // returned number is 84
addTwoNums(specificNum, randomNum); // returned number is 42 + some random number
```

A **pure function** returns the exact same result as long as it's given the same values.

Another rule for a function to be considered pure is that it should not have side-effects. A side-effect is any instance where a function makes a change outside of itself.

## Scoping with var, let and const

Global scope - outside the function. Local scope - inside the function. 

In ES5 Java Script only functions can build locac scope. In ES6 JS introduced a new variety of scope known as the block scope.

Block scope states that a variable declared in a block of code is only accessible inside that block

`let` or `const` build block scope 

```js
let color = 'red';			//--- global scope
if (color == 'red') {		//--- block scope curly braces
	let color == 'blue'
}
```

The **var** keyword is very **lenient**:

* can be used even before it is declared.
* same variable can be redeclared 
* can be scoped to a function or globally

Behavior of **let** and **const** is more **strict**

* can't be used before it is declared 
* variable can't be redeclared
* It's scoped to the block

**Tips to choose**: 

* Use **let** if the value might change in the future
* use **const** if the value will never change

**Let** variable can be undefined, can't be redeclared but can be re-assigned

**Const** variable must be initialized and can't be redeclared and re-assigned

In modern JavaScript, I'd advise you **to pick either let or const** based on whether they will be reassigned or not

In general, it's a good practice to use `const` for values that won't change after initialization, and use `let` for values that you intend to change later within the same scope.

The use of `var` is **less common** in modern JavaScript due to its scoping behavior and potential for unintended side effects.

## Introduction to Object-Oriented Programming

```js
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('total price: ', calculation);
    }
}
```

### Classes

```js
class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }

    turboOn() {
        console.log("Turbo is on!")
    }
}
```

The role of the **constructor function** is to assign the passed in parameters to the future objects properties. It is the constructor function that is used when instantiating new objects, instances of a given class. 

It's important to remember that you don't use the function keyword when method is declared. Just the name of the method is needed. 

```js
// create na instance of the Car class
const car1 = new Car('red', 120);
```

## The Principles of OOP

The four fundamental OOP principles are inheritance, encapsulation, abstraction and polymorphism. 

The thing to remember about Objects is that they exist in a hierarchal structure. Meaning that the original base or super class for everything is the Object class, all objects derive from this class. This allows us to utilize the Object.create() method. to create or instantiate objects of our classes.

```js
class Animal { /* ...class code here... */ }
var myDog = Object.create(Animal)
console.log (Animal)
```

A more common method of creating objects from classes is to use the new  keyword. When using a default or empty constructor method, JavaScript implicitly calls the Object superclass to create the instance.

Note that each sub-class inherits from its super-class. In turn, a sub-class might also be a super-class, if there are classes inheriting from that sub-class.

### OOP Principles: Inheritance

To setup the inheritance relation between classes in JavaScript, I can use the **extends** keyword, as in class B extends A.

```js
class Animal { /* ...class code here... */ }
class Bird extends Animal { /* ...class code here... */ }
class Eagle extends Bird { /* ...class code here... */ }
```

### OOP Principles: Encapsulation

In the simplest terms, encapsulation has to do with making a code implementation "hidden" from other users, in the sense that they don't have to know how my code works in order to "consume" the code.

Example: I don't really need to worry or even waste time thinking about how the **toUpperCase()** method works. All I want is to use it, since I know it's available to me

### OOP Principles: Abstraction

**Abstraction** is all about writing code in a way that will make it more generalized.

The concepts of **encapsulation** and **abstraction** are often misunderstood because their differences can feel blurry.

It helps to think of it in the following terms: 

- An **abstraction** is about extracting the *concept* of what you're trying to do, rather than dealing with a specific manifestation of that concept. 
- **Encapsulation** is about you not having access to, or not being concerned with, how some implementation works internally.

### OOP Principles: Polymorphism

Polymorphism is a word derived from the Greek language meaning "multiple forms". An alternative translation might be: "something that can take on many shapes".

So, to understand what polymorphism is about, let's consider some real-life objects.

- A door has a bell. It could be said that the bell is a property of the door object. This bell can be rung. When would someone ring a bell on the door? Obviously, to get someone to show up at the door.

- Now consider a bell on a bicycle. A bicycle has a bell. It could be said that the bell is a property of the bicycle object. This bell could also be rung. However, the reason, the intention, and the result of somebody ringing the bell on a bicycle is not the same as ringing the bell on a door.

The above concepts can be coded in JavaScript as follows:

```js
const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}
```

At this point, one can conclude that the exact same name of the method can have the exact opposite intent, based on what object it is used for.

```js
bicycle.bell(); // "Get away, please
door.bell(); // "Come here, please"
```

Now, to make this code truly polymorphic, I will add another function declaration:

```js
function ringTheBell(thing) {
    console.log(thing.bell())
}
```

Now I have declared a ringTheBell() function. It accepts a thing parameter - which I expect to be an object, namely, either the bicycle object or the door object.

```js
ringTheBell(bicycle); // Ring, ring! Watch out, please!
ringTheBell(door); // "Ring, ring! Come here, please!"

```

Here's another example,the concatenation operator, used by calling the built-in **concat()** method.

```js
"abc".concat("def"); // 'abcdef', the same as "+" method
// but
["abc"].concat(["def"]); // ['abc', 'def']
["abc"] + ["def"]; // ["abcdef"]
```

This means that the concat() method is exhibiting polymorphic behavior since it behaves differently based on the context - in this case, based on what data types I give it.

## Inheritance

In JavaScript, the **prototype** is an object that can hold properties to be shared by multiple other objects

```js
var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
}
var eagle1 = Object.create(bird);
var penguin1 = Object.create(bird);
penguin1.canFly = false;
```

To **inherit** from one class to a new sub-class, JavaScript provides the **extends** keyword, which works as follows:

**super** is used to specify what property gets inherited from the super-class in the sub-class.

```js
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
}
```

in addition to the inherited properties, you also **automatically inherit** all the methods that exist on the Train prototype

Prototypes seem easy to grasp at a certain level, but it's easy to get lost in the complexity. This is one of the reasons why class syntax in JavaScript improves your developer experience, by making it easier to reason about the relationships between classes. However, as you improve your skills, you should always strive to understand your tools better, and this includes prototypes. After all, JavaScript is just a tool, and you've now "peeked behind the curtain".

## Default Parameters

```js
function withDefaultParams(number = 10) {
    console.log('Result:', number * number)
}
```

This approach improves the developer experience of my code, because I no longer have to worry about feeding the **WithDefaultParameters** class with all the arguments. For quick tests, this is great, because I no longer need to worry about passing the proper arguments.

Additionally, this approach really shines when building inheritance hierarchies using classes, as it makes it possible **to provide only the custom properties in the sub-class**, while still **accepting all the default parameters from the super-class constructor**.

## Additional resources

Here is a list of resources that may be helpful as you continue your learning journey.

[Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor) 

[Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

[Object-oriented programming](https://css-tricks.com/the-flavors-of-object-oriented-programming-in-javascript/)  

[Regular Expressions in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

[RegExp object in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

