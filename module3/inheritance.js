// inheritance 
class Animal { /* ...class code here... */ }
class Bird extends Animal { /* ...class code here... */ }
class Eagle extends Bird { /* ...class code here... */ }

var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
}

var eagle1 = Object.create(bird);
console.log(eagle1);
console.log('eagle1 has wings', eagle1.hasWings)

var penguin1 = Object.create(bird);
penguin1.canFly = false;
console.log("penguin1", penguin1)