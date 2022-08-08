// Returns a random integer between min and max.
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
//
// console.log(getRandomInt(0,25));
//
// console.log(Math.round(20.12431));
// console.log(Math.round(15.5));
// console.log(Math.floor(15.99));
// console.log(Math.ceil(17));
// console.log(Math.pow(2,3));
// console.log(Math.sqrt(11));
//
// console.log(Math.E);
// console.log(Math.PI);




(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {

            return (circle.radius*circle.radius)*Math.PI;
        },

        logInfo: function (doRounding) {

            if(doRounding) {
                return Math.round(circle.getArea());
                console.log("Area of a circle with radius: " + circle.radius + ", is: ");
            }else{
                return circle.getArea();
                console.log("Area of a circle with radius: " + circle.radius + ", is: ");
            }// TODO: complete this method.



        }
    };
   //  console.log(circle.getArea());
   //  //log info about the circle
    console.log("Raw circle information");
     console.log(circle.logInfo(false));
   console.log("Circle information rounded to the nearest whole number");
   console.log(circle.logInfo(true));

   console.log("=======================================================");
   // TODO: Change the radius of the circle to 5.
    circle.radius = 5
   //log info about the circle
    console.log("Raw circle information for radius "+circle.radius+" is ");
    console.log(circle.logInfo(false));

    console.log("Circle information rounded to the nearest whole number");
    console.log(circle.logInfo(true));
})();
