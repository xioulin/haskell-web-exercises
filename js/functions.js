"use strict";


// define a function and immediately invoke (i.e. call) it
    (function () {
        var iffeVar = "I'm local to the IIFE.";
    })();

// alert(iffeVar); // undefined




/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
*/
function sayHello(name){
        var name = prompt("what is your name");
        return("hello, "+name)
}
console.log(sayHello());
console.log("me me me")

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
var helloMessage = sayHello(name) ;
console.log(helloMessage);
/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
*/

var myName = "Peter"
sayHello(myName);
console.log();
// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random


/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
*/
var random = Math.floor((Math.random() * 3) + 1);
 function isTwo(num){
     if(num === 2){
        return "the number is two"
     }else{
         return "numb er is not two"
     }
 }
 console.log("a random number is generated, will it be two?")
 console.log(isTwo(random));
 console.log("the number is really "+random);
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 *
 * /**
 *  * TODO:
 *  * Use prompt and alert in combination with your calculateTip function to
 *  * prompt the user for the bill total and a percentage they would like to tip,
 *  * then display the dollar amount they should tip
 *
 *
 * alert (calculateTip(prompt("how much to tip"), promp(message: "how much is the bill")));
*/

let tipPercent = prompt("what tip percentage do you want?");
var tipPercentage = tipPercent/100;
let billTotal = prompt("what is the the bill total?")
 function calculateTip(){
        var billTotalinInteger = (tipPercentage*billTotal).toFixed(2);
     alert("The bill total is "+billTotalinInteger+" dollars")
     return "$"+billTotalinInteger;
}
console.log(calculateTip())
/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
*/
let origPrice = prompt("what is the price in dollars?");
alert("the price is $"+origPrice)
let discPerc = prompt("what is the discount percentage?");
alert("the discount percentage is "+discPerc+"%");
function applyDiscount(){
    let decimDisc = discPerc/100;
    let finalPrice = origPrice-(origPrice*decimDisc)
    return finalPrice.toFixed(2);
}
alert("the price after applying the discount is $"+applyDiscount())

