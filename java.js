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
console.log(name);
let age = 25;
console.log(age); 
test = 10>20;
console.log(test); 
let emptyValue = null;
console.log(emptyValue); 
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
///////////////////////////////////////////////////////////////////////////
//conditional statements
let clname = "II B.Tech CSE A1";
let cr = "xyz";
let game = "Cricket"
if(clname == "III B.Tech CSE A2") {
document.write("CR of the Class is: ", cr);
}
else if(game == "Cricket"){
document.write("Caption of Cricket Team is Dhoni");
}
else{
document.write("Invalid Input")
}
/////////////////////////////////////////////////////////////////////////
let a=19;
let cvote=(a>=18)?"Yes ,you can vote!": "no cant vote";
console.log(cvote);
//////////////////////////////////////////////////////////////////
//global scope
var Apple = "red";
let Orang = "yellow";
const banan = "green"
function fruit() {
document.write(Apple)
document.write(Orange)
document.write(banana)
}
fruit()
//////////////////////////////////////////////////////////////
//function scope
var Apple = "red";
let Orange = "yellow";
const banana = "green"
function fruit() {
var x = 100;
let y = 200;
const z = "Mahesh"
document.write(x)
document.write(y)
document.write(z)
}

fruit()
/////////////////////////////////////////////////////////////////
//block scope
function sports() {
    if (10 < 20){
    let cricket = "virat"
    document.write(cricket)
    }
    document.write(cricket)
    }
    sports()