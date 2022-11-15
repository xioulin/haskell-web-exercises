// Returns a random integer between min and max.
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }





(function() {
    "use strict";

    // create a circle object
    var circle = {
        // create a circle object

            radius: 3,
            getArea: function () {
                var area = Math.PI*Math.pow(this.radius,2);
                // TODO: complete this method
                // hint: area = pi * radius^2
                return area; // TODO: return th// e proper value
            },

            logInfo: function (doRounding) {
                // TODO: complete this method.
                    if(doRounding){
                        var roundNum= Math.round(circle.getArea());
                    }else{
                        return doRounding;
                    }
                // If doRounding is true, round the result to the nearest integer.
                // Otherwise, output the complete value

                console.log("Area of a circle with radius: " + this.radius + ", is: "+roundNum);
            }
        };


        // log info about the circle
        console.log("Raw circle information");
        circle.logInfo(false);
        console.log("Circle information rounded to the nearest whole number");
        circle.logInfo(true);

        console.log("=======================================================");
        // TODO: Change the radius of the circle to 5.

        // log info about the circle
        console.log("Raw circle information");
        circle.logInfo(false);
        console.log("Circle information rounded to the nearest whole number");
        circle.logInfo(true);






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
    console.log("Raw circle information for radius "+circle.radius+" is "+circle.getArea());
    console.log(circle.logInfo(false));

    console.log("Circle information rounded to the nearest whole number");
    console.log(circle.logInfo(true));
})();
