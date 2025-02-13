function varExample() {
    var x = 10;
    console.log("Initial value of x:", x); 
    if (true) {
        var x = 20; 
        console.log("Inside block, x:", x); 
    }
    console.log("Outside block, x:", x);
}
varExample();
/////////////////////////////////////////////////////////////////////////////////
function letExample() {
    let y = 30;
    console.log("Initial value of y:", y); 
    if (true) {
        let y = 40; 
        console.log("Inside block, y:", y); 
    }
    console.log("Outside block, y:", y); 
}
letExample();

///////////////////////////////////////////////////////////////////////////////
function constExample() {
    const z = 50;
    console.log("Value of z:", z); 
    if (true) {
        const z = 70; 
        console.log("Inside block, z:", z); 
    }
    console.log("Outside block, z:", z); 
}
constExample();

//////////////////////////////////////////////////////////////////////////////
let name = "John";
console.log(name); // Output: John

let age = 25;
console.log(age); // Output: 25

test = 10>20;
console.log(test); // Output: false

let emptyValue = null;
console.log(emptyValue); // Output: null

let notDefined;
console.log(notDefined); // Output: undefined
////////////////////////////////////////////////////////////////////////////
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); 
fruits.push("Mango");
console.log(fruits); 
fruits.pop();
console.log(fruits); 
console.log(fruits.includes("Banana")); 
fruits.forEach(fruit => console.log(fruit));
////////////////////////////////////////////////////////////////////////////
// Creating an object
let person = {
    name: "John",
    age: 25,
    city: "New York"
};
console.log(person.name); 
person.age = 26;
console.log(person.age); 
person.country = "USA";
console.log(person); 
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
console.log("city" in person); 
