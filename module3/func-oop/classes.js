//! Creating classes and working with prototypes

class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights(){
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log("Lights on?", this.lightsOn);
    }
    getSelf() {
        console.group(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

var myFirstTrain = new Train('red', false);
myFirstTrain.getSelf();
myFirstTrain.getPrototype();

/* 
Finally, the result of calling the getPrototype() method is the console 
logging of all the properties on the prototype. When the class syntax is used 
in JavaScript, this results in only shared methods being stored on the prototype, 
while the constructor() function sets up the mechanism for saving instance-specific 
values ("data") at the time of object instantiation.
*/

/* It is possible to implement polymorphism using classes in JavaScript, 
by inheriting from the base class and then overriding the inherited behavior. */

class HighSpeedTrain extends Train {
    constructor (passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn); 
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status: ', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log("Lights are 100% operational.")
    }
}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights();
highSpeed1.lightsStatus();

train5.getPrototype();
highSpeed1.getPrototype();

Train.prototype;
HighSpeedTrain.prototype.__proto__;

/* The prototype object of the highSpeed1 object is this object: 
{constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}. 
In turn this object has its own prototype, which can be found using the following syntax: 
HighSpeedTrain.prototype.__proto__. 
Running this code returns: 
{constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}.
*/


// ! Using class instance as another class' constructor's property

class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) //
console.log(boxingGym.stationaryBike) //
console.log(boxingGym.treadmill) //