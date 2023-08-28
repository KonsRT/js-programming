function objectMaker(val) {
    return {prop: val}
}

function doubleIt(val) {
    return val*2;
}

console.log( objectMaker(20), objectMaker(doubleIt(100)) );

// recursion 
let counter = 3;
function example() {
    console.log(counter);
    counter = counter - 1;
    if (counter === 0) return; 
    example();        
}

example();


