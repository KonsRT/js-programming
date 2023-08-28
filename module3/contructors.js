
function Icecream(flavour) {
    this.flavour = flavour;
    this.meltIt = function() {
        console.log(`The ${this.flavour} icecream has melted`);
    }
}

let kiwIcecream = new Icecream("Kiwi");
let appleIcecream = new Icecream("Apple");

console.log(kiwIcecream);
appleIcecream.meltIt();

let apple = String("apple"); // don't use that with primitive types (like here)
let pear = "pear";


// Пример конструктора
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет.`);
    };
}

// Создание нового объекта с использованием конструктора
const person1 = new Person("Анна", 25);
const person2 = new Person("Иван", 30);

person1.sayHello(); // Вывод: Привет, меня зовут Анна и мне 25 лет.
person2.sayHello(); // Вывод: Привет, меня зовут Иван и мне 30 лет.
