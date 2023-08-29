//creating an object - OOP example
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false

var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('total price: ', calculation);
    }
}

purchase1.totalPrice();

//classes 
class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }

    turboOn() {
        console.log("Turbo is on!")
    }
}

const car1 = new Car('red', 120);
car1.turboOn();

class Animal { /* ...class code here... */ }

var myDog1 = Object.create(Animal)
var myDog2 = new Animal()
console.log (Animal)


