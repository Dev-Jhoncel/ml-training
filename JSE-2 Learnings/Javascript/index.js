const objectRef = {
    name: 'Jhoncel Cadiena',
    age: 30, 
    address: {
        street: 'Jayme Street',
        city: 'Cebu City'
    }
}

var getProp = Object.getOwnPropertyNames(objectRef);
console.log(getProp); 
// ['name', 'age', 'address']

var freezeObj = Object.freeze(objectRef);
console.log(freezeObj); 
// { name: 'Jhoncel Cadiena', age: 30, address: { street: 'Jayme Street', city: 'Cebu City' } }


// Prototypes
// Prototypes are objects that can be used to add properties and methods to other objects.
figure = {
getType: function() {
    return this.type ? this.type : "unknown";
}
};

let circle = {
type: "circle",
center: {x:0, y:0},
radius: 100
};
// Using Object.setPrototypeOf to set the prototype of circle to figure
// This allows circle to inherit the getType method from figure
// Note: Using Object.setPrototypeOf is generally not recommended for performance reasons,
// but it is used here for demonstration purposes.
Object.setPrototypeOf(circle, figure); // Set the prototype of circle to figure 
// -- alternative to using __proto__ (ex. circle.__proto__ = figure)
console.log(circle.getType());  
// Output: circle

// Using a constructor function to create an object with a prototype
// Constructor function for Figure
let Figure = function(){
    this.getType = function() {
        return this.type ? this.type : "unknown";
    }
};
let figure = new Figure;

let Triangle = function(v1, v2, v3) {
    this.type = "triangle";
    this.vertices = [ v1, v2, v3];
};
Triangle.prototype = figure;

let triangle1 = new Triangle({x:0, y:0}, {x:50, y:50}, {x:10, y:100});


let Circle = function(center, radius){
    this.type = "circle";
    this.center = center;
    this.radius = radius;
};
Circle.prototype = figure;

let circle1 = new Circle({x:0, y:0}, 10);
let circle2 = new Circle({x:100, y:100}, 100);


console.log(circle1.getType());
// Output: circle
console.log(triangle1.getType());
// Output: triangle
