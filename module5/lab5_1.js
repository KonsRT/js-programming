// final assingment 

dishes = [
    {name: "Italian pasta     ", priceTax: 11.46, priceNoTax: 9.55}, 
    {name: "Rice with veggies", priceTax: 10.38, priceNoTax: 8.65}, 
    {name: "Chicken with potatoes", priceTax: 18.66, priceNoTax: 15.55}, 
    {name: "Vegetarian Pizza", priceTax: 7.74, priceNoTax: 6.45} 
]

function printPrices(taxBoolean) {
    // if true - dish names and final prices with tax
    // if false - dish names and prices without tax
    let i =0;
    while ( i < dishes.length ) {
        if (taxBoolean == true) {
            console.log(dishes[i]['name'], ': ', dishes[i]['priceTax'] );
        } else {
            console.log(dishes[i]['name'], ': ', dishes[i]['priceNoTax']);
        }
        i += 1; 
    }
}

function getPrices(taxBoolean) {
    // if true - dish names and final prices with tax
    // if false - dish names and prices without tax

    for (var t = 0; t < dishes.length; t++) {
        let finalPrice;
        if (taxBoolean == true) {
            finalPrice = dishes[t]['priceNoTax'] * 1.2;
            console.log("Dish: ", dishes[t]['name'], '\t Price: $',  finalPrice);
        } else if (taxBoolean == false) {
            finalPrice = dishes[t]['priceNoTax'];
            console.log("Dish: ", dishes[t]['name'], '\t Price: $', finalPrice);
        } else {
            console.log('You need to pass a boolean to the getPrices call!');
            return;
        }
    }
}

function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);

    if (guests < 0 || guests >=30) {
        console.log('The second argument must be a number between 0 and 30');
        return;
    }

    let discount = 0;
    
    if (guests < 5) {
        discount = 5;
    } else if (guests >= 5) {
        discount = 10;
    }
    console.log('Discount is: $' + discount);
}

getDiscount(true, 2)
getDiscount(false, 10)
getDiscount(3, 50)

