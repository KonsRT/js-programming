class Person {
    constructor (name = 'Tom', age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep () {
        this.energy += 10;
        console.log("Energy increased on 10, and now: ", this.energy);
    }
    doSomethingFun() {
        this.energy -= 20;
        console.log("Energy decreased on 10, and now: ", this.energy);
    }
}

class Worker extends Person {
    constructor (xp = 0, hourlyWage = 10, name, age, energy) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp += 10;
        console.log("XP increased on 10, and now: ", this.xp);
    }
}

let intern = new Worker(0, 10, "Bob", 21, 110)
intern.goToWork()

let manager = new Worker(100, 30, "Alice", 30, 120)
manager.doSomethingFun()