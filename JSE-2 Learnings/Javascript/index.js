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

Circle.prototype.hi = function(){console.log("Hi!")};
circle1.hi(); // Hi!

circle1.hi();
// Hi!
triangle1.hi();
// Hi!
figure.hi();
// TypeError: figure.hi is not a function
// The above error occurs because the `hi` method is not defined on the `figure` prototype.

console.log("abcd".hi());
// TypeError: "abcd".hi is not a function
// The above error occurs because the `hi` method is not defined on the String prototype.

// Original paintings array (with typos fixed)
let paintings = [
  { name: "Mona Lisa", artist: "Leonardo da Vinci", year: 1503 },
  { name: "The Last Supper", artist: "Leonardo da Vinci", year: 1498 },
  { name: "Starry Night", artist: "Vincent van Gogh", year: 1889 },
  { name: "The Scream", artist: "Edvard Munch", year: 1893 },
  { name: "Guernica", artist: "Pablo Picasso", year: 1937 },
  { name: "Girl With a Pearl Earring", artist: "Johannes Vermeer", year: 1665 },
  { name: "The Birth of Venus", artist: "Sandro Botticelli", year: 1485 },
  { name: "Las Meninas", artist: "Diego Velazquez", year: 1656 },
  { name: "The Creation of Adam", artist: "Michelangelo", year: 1512 }
];

// Constructor function
function Image(title, artist, date) {
  this.title = title;
  this.artist = artist;
  this.date = date;
}

// Factory function
function getImage(title, artist, date) {
  return {
    title: title,
    artist: artist,
    date: date
  };
}

// Create images1 using the constructor
let images1 = paintings.map(p => new Image(p.name, p.artist, p.year));

// Create images2 using the factory
let images2 = images1.map(img => getImage(img.title, img.artist, img.date));

// Display contents of images2
console.log(images2);
// Output: Array of image objects with title, artist, and date properties
// Display contents of images1

images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1503)
// -> Last Supper (Leonardo da Vinci, 1495)
// -> The Starry Night (Vincent van Gogh, 1889)
images.clear();
images.show();

                 