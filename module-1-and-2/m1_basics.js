
var person = 'John'; 

// ' inside the string
console.log("It's a lovely day" )

// equality and strict equality/inequality operators 
console.log(100 == "100", 100 === "100")
console.log(1 != "1", 1 !== "1")

// conditions 
var result = 50;
if (result > 40) {
	console.log("You passed");
} else {
	console.log("You didn't pass")
}

// switch
var place = "first";
switch(place) {
    case "first":
        console.log("Gold");
        break;
    case "second":
        console.log("Silver");
        break;
    case "third":
        console.log("Bronze");
        break;
    default:
        console.log("No medal");
        break;
}

//loops 
for (var i = 1; i<4; i++){
	console.log(i)
}

var i=1;
while (i<4){
    console.log(i);
    i=i+1
}

// loop for eshop cards 
//Note: In order to have the styles applied, try running this code snippet in your browser's console.
var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}