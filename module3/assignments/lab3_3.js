// Advanced JS Features - array and object iteration

var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    
    for (key of Object.keys(dairy)) {
        console.log(dairy[key]);
    }
}

logDairy();

const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    console.log('== Bird can ==')
    for (prop of Object.keys(bird)) {
        console.log(prop, ': ', bird[prop]);
    }
}

function animalCan() {
    console.log('== Animal can ==')
    for (prop in bird) {
        console.log(prop)
    }
}

birdCan()
animalCan()