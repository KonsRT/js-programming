
//! spread operator - оператор расширения
console.log('--- ✌ examples with spread operator ✌ ---')
let top3 = [
    'The Colloseum',
    'Trevi Fountain',
    'The Vatican City'
];

function showItinerary(place1, place2, place3) {
    console.log("Visit ", place1);
    console.log("Then visit ", place2);
    console.log("Finish with visit to ", place3);
}

// showItinerary(top3[0], top3[1], top3[2]);
showItinerary(...top3);

//concantenate arrays 
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']

const fruitsAndBerries = [...fruits, ...berries]
console.log('Fruits And Berries', fruitsAndBerries)

// It's also easy to join objects:  
const flying = { wings: 2 }
const car = { wheels: 4}

const flyingCar = {...flying, ...car}
console.log("Flying car has: ", flyingCar)

// Add new members to arrays without using the push() method
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

// Copy either an object or an array into a separate one
const car1 = { 
    speed: 200,
    color: 'yellow' 
}
const car2 = {...car1};
car2.speed = 250;
console.log(car1, car2);

// Convert a string to an array using the spread operator
const greetings = 'Hello';
const arrayOfChars = [...greetings];;
console.log(arrayOfChars);

// You can copy an array into a completely separate array
const fruits1  = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, ' NOT ', fruits2)

//! rest operator - оператор сбора 
console.log('--- ✌ examples with rest operator ✌ ---')
let top7 = [
    'The Colloseum',
    'the Roman Forum',
    'Trevi Fountain',
    'The Vatican',
    'The Pantheon',
    'Piaza Venezia',
    'The Palatine Hill'
];

// destructuring
const [first, second, third, ...secondVisit] = top7;
console.log(first);
console.log(secondVisit);

// rest operator with function
function addTaxToPrices(taxRate, ...itemsBought) {
    return itemsBought.map(item => taxRate*item)
}

let shoppingCart = addTaxToPrices(1.1, 46, 89, 35, 79);
console.log('Prices include tax', shoppingCart);

