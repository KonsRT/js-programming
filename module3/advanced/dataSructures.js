

// forEach() method
const fruits = ['kiwi', 'mango', 'apple', 'pear']

function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`);
}
fruits.forEach(appendIndex);

const veggies = ['onion', 'garlic', 'potato']
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`)
});

// filter() method
const nums = [0, 10, 20, 30, 40, 50];

nums.filter( function(num) {
    return num > 20;
}); // [30, 40, 50]

// map method
[0, 10, 20, 30, 40, 50].map( function(num){
    return num/10;
}); //[1, 2, 3, 4, 5]

// [0, 10, 20, 30, 40, 50].map( num => num/10 ); 

// convert an object to an array
const resuult = [];
const drone = {
    speed: 100, 
    color: 'yellow'
};
const droneKeys = Object.keys(drone);
droneKeys.forEach(function(key){
    resuult.push(key, drone[key]);
});
console.log(resuult);