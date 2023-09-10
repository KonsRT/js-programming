class Animal {
    constructor(lg) {
        this.legs = lg;
    }
}

class Dog extends Animal {
    constructor() {
        super(4);
    }
}
var result = new Dog();
console.log(result.legs);

class Animal2 {

}

class Cat extends Animal2 {
    constructor() {
        super();
        this.noise = "meow";
    }
}

var result = new Animal();
console.log(result.noise);