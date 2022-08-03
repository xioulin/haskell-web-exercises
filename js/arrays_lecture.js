"strict"

//
//
// var numbers = [1,5];
// console.log(numbers);
/*
var shapes = ['square', 'rectangle', 'circle', 'triangle'];

console.log('There are ' + shapes.length + ' shapes in the array');

console.log('The first shape is: ' + shapes[0]);
// The first shape is: square

console.log('The second shape is: ' + shapes[1]);
// The second shape is: rectangle

console.log('The third shape is: ' + shapes[2]);
// The third shape is: circle

console.log('The fourth shape is: ' + shapes[3]);
// The fourth shape is: triangle

console.log('The fifth shape is: ' + shapes[4]);
// The fifth shape is: undefined*/

// var shapes = ['square', 'rectangle', 'circle', 'triangle'];
//
// // loop through the array and log the values
// for (var i = 0; i < shapes.length; i++) {
//     console.log('The shape at index ' + i + ' is: ' + shapes[i]);
// }

// someArray.forEach(function(element, index, array) {
//     // ...
// })

var shapes = ['square', 'rectangle', 'circle', 'triangle'];

// loop through the array and log the values
shapes.forEach(function(shape) {
    console.log(`'Here is a lovely shape': ${shape}.`);
});