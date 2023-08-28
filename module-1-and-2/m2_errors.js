// !Error handling

try {
	console.log(c+d) // not declared 
} catch(err) {
	console.log(err)
}

try {
	throw new Error();
} catch(err) {
	console.log(err)
}

console.log('running');

throw new ReferenceError(); // принудительный вызов ошибки
