// ! Objects Linking to Other Objects (OLOO)

// https://css-tricks.com/the-flavors-of-object-oriented-programming-in-javascript/

/* OLOO was coined and popularized by Kyle Simpson. 
In OLOO, you define the blueprint as a normal object. 
You then use a method (often named init, but that isn’t required 
in the way constructor is to a Class) to initialize the instance.
*/

const Human = {
    init(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
}

const chris = Object.create(Human) 
chris.init('Chris', 'Coyier')
// another way: 
// const chris = Object.create(Human).init('Chris', 'Coyier')
console.log(chris.firstName, chris.lastName)