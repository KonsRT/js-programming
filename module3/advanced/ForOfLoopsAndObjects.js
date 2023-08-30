// example 1 
const car = {
    engine : true,
    streeting : true,
    speed: 'slow'
}
const sportCar = Object.create(car);
sportCar.speed = 'fast'
console.log('The sportCar object: ', sportCar);

console.log('----- for-in is unreliable -----')
for (prop in sportCar) {
    console.log(prop);
}
console.log('🤒', 'Itarating over object AND its prototype!')

console.log('----- for-of is reliable -----');
for (prop of Object.keys(sportCar)) {
    console.log(prop + ": " + sportCar[prop] );
}
console.log("😎", "Iterating over object's OWN PROPERTIES only!");

// example 2
const car2 = {
    engine: true
}
const sportCar2 = Object.create(car2);
sportCar2.speed = 'fast';
console.log("The sporCat2 object: ", sportCar2);

for (prop in sportCar2) {
    console.log('🤒', prop);
}

for (prop of Object.keys(sportCar2)) { 
    console.log('😎', prop, ": ", sportCar2[prop]);
}