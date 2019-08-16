/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - the scope of 'this' will refer to the top level window object
* 2. Implicit binding - the scope of 'this' will refer to the object using it
* 3. New binding - the scope of 'this' refers to the instance of the object that uses it
* 4. Explicit binding - the scope of 'this' refers to the object that used the call method to inherit the attribute 'this' is referring to
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function money (param) {
    console.log(this);
    return param;
}

money(5.02);

// Principle 2

// code example for Implicit Binding

const change = obj => {
    obj.makeChange = function() {
        console.log(this.name + " your change is " + (this.money - this.price));
    };
};

const personOne = {name: 'Turtle', price: 1.52, money: 1.65};
const personTwo = {name: 'Snek', price: 5.03, money: 10};

change(personOne);
change(personTwo);

personOne.makeChange();
personTwo.makeChange();

// Principle 3

// code example for New Binding

function Dog(name) {
    this.noise = "Bark";
    this.name = name;
    this.bark = () => {
        console.log(`${this.name}: ${this.noise}`);
    }
}

const fido = new Dog("Fido");
const rover = new Dog("Rover");

fido.bark();
rover.bark();

// Principle 4

// code example for Explicit Binding

function ThingOne (attributes) {
    this.place = attributes.place;
};

function ThingTwo (attributes) {
    ThingOne.call(this, attributes);
    this.name = attributes.name;
};

const things = new ThingTwo({
    name: 'person',
    place: 'location'
});

console.log(things.place);