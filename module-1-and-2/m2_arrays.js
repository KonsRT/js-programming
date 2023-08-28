// !arrays 
var train1 = ["wheat", "barley", "potato", "salt", "rocks"];
console.log(train1[0]);

// mini test 
function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log('Found the', match, 'at', i);
        } else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder('test', 't')

// to add new items to an array 
var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']

// to remove the last item from an array
fruits.pop();
console.log(fruits); // ['apple']