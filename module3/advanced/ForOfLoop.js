const colors = ['red', 'yellow', 'blue'];
for (var color of colors) {
    console.log(color)
}


// 
const car3 = {
    speed: 300,
    color: "yellow"
}

console.log("Array of keys: ", Object.keys(car3), '\n',
            "Array of values: ", Object.values(car3))

console.log(Object.entries(car3))

// loop over any object's own property keys and values.
var closingItem = {
    price: 50, 
    color: 'beige', 
    material: 'cotton',
    season: 'autumn'
}

for (key of Object.keys(closingItem)) {
    console.log(key, ":", closingItem[key])
}

// show with random key 
function testBracketDynamicAccess() {
    var dynamicKey;
    if (Math.random() > 0.5) {
        dynamicKey = 'speed';
    } else {
        dynamicKey = 'color';
    }

    var drone = {
        speed : 15,
        color: 'orange'
    }
    console.log(drone[dynamicKey])
}

testBracketDynamicAccess();