
// Math.random()
// generate a decimal number between  and 0.99
Math.random();

var decimal = Math.random()*10;


// Math.ceil() round unp any decimal number to the nearest integer
var nmbrs = [0.0001, 0.5, 0.99, 1.01, 1.5, 2.99]
for (var i = 0; i < nmbrs.length; i++) {
    console.log(nmbrs[i], "ceil is ", Math.ceil(nmbrs[i]));
}

// random from 1 to 10
var rounded = Math.ceil(decimal);
console.log(rounded); 

/* Here's a simple example of converting an everyday Base 10 number 
(a number of the common decimal system) 
to a Base 2 number (i.e binary number). */

(10).toString(2); // '1010'