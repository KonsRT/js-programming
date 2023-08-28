/* 
Animal - Bird - Parrot
    |
    --- Cat - House Cat
        |
        Tiger
*/

// 2 essentiak keywords for OOP: 
// extends (to inherit from an existing class) 
// and super (to "borrow" functionality from a super-class)

// ! creating animal classes

class Animal {
    constructor(color = 'yellow', energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if (this.energy > 0) {
            this.energy -= 20;
            console.log("Energy is decreasing, currently at: ", this.energy);
        } else if (this.energy == 0) {
            this.sleep();
        }
    }
    sleep(){
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy);
    }
    getColor(){
        console.log("Color: ", this.color);
    }
}

/* If I didn't use the super keyword in our sub-classes, I'd get the following error: 
Uncaught ReferenceError: Must call super constructor in derived class 
before accessing 'this' or returning from derived constructor.
*/

class Cat extends Animal {
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy)  {
        super(color, energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
    }
    makeSound(){
        console.log(this.sound);
    }
}

class HouseCat extends Cat {
    constructor(color, energy, sound, canJumpHigh, canClimbTrees, houseCatSound = 'meow') {
        super(color, energy, sound,canJumpHigh, canClimbTrees);
        this.houseCatSound = houseCatSound;
    }
    // override method
    makeSound(option){
        if (option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat {
    constructor(tigerSound='Roar!', color, energy, sound, canJumpHigh, canClimbTrees, houseCatSound){
        super(color, energy, sound, canJumpHigh, canClimbTrees, houseCatSound);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }    
        console.log(this.tigerSound);
    }
}

class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound, canFly, color, energy) {
        super(sound, canFly, color, energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}

// ! now we can build various animal objects
// two parrots: one that can talk, and the other that can't

var polly = new Parrot(true);
var fiji = new Parrot(false);

console.log("Polly says: ")
polly.makeSound();

console.log("Fiji says: ")
fiji.makeSound(true);

console.log(`Polly color is ${polly.color} and energy is ${polly.energy}`);

polly.isActive();

var penguin = new Bird("shriek", false, 'black and white', 200);
console.log('Penguin: ', penguin)

var leo = new HouseCat();
console.log('Leo says: ')
// leo, no purring please:
leo.makeSound(false);
// leo, both purr and meow now:
leo.makeSound(true);