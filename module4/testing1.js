
function concatStrings(strA, strB) {
    return strA + strB;
}

concatStrings('abc', 'def'); 
concatStrings(1,2); //-> 3

//JEST 
expect(concatStrings("abc", "def")).toBe("abcdef");
expect(concatStrings("1", "2")).toBe("12")