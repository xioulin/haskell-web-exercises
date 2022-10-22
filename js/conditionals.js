/*
let username = prompt("enter user name").toLowerCase();
let password = prompt("enter password").toUpperCase();

let currentUserName = "xioulin"
let currentPassword = "password"


if(username === currentUserName && password === currentPassword){
    alert("you have logged in");

}else if(username !== currentUserName){
    alert("wrong username")
}else if(password !== currentPassword){
    alert("wrong password")
} else{
    alert("incorrect, try again")
}


var isRaining;
isRaining =confirm("is it raining?");
alert((isRaining) ?"good for you" : "go fuck yourself");




var pizzaPreference = prompt("What kind of pizza do you like?");

switch(pizzaPreference) {
    case "pineapple and hot sauce":
        alert("What a coincidence, that's my favorite!");
        break;
    case "cheese":
        alert("Just plain cheese? Okay...");
        break;
    default:
        alert(pizzaPreference + " isn't my favorite, but let's order some!");
        break;
}

*/
"use strict";

//
// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *//* Example:
*  > analyzeColor('blue') // returns "blue is the color of the sky"
*  > analyzeColor('red') // returns "Strawberries are red"
*
*
*  > analyzeColor('cyan') // returns "I don't know anything about cyan"
*
* You should use an if-else-if-else block to return different messages.
*
* Test your function by passing various string literals to it and
* console.logging the function's return value
*/
// function analyzeColor(input) {
//     var input1 = input.toLowerCase();
//     if (input === "blue") {
//         return input + " is my favorite color!!"
//     } else if (input1 === "red") {
//         return input + " is not my favorite color"
//     } else {
//         return "I have no opinion on " + input;
//     }
// }
// let color = prompt("what is your favorite color")
// alert(analyzeColor(color))

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

// for(let i =0; i<colors.length;i++){
//     console.log((colors[i]))
// }

/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor))

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */


// switch(randomColor) {
//     case "blue":
//         console.log("the color generated is "+randomColor);
//         alert("blue is my favorite color!!");
//         break;
//     case "red":
//         console.log("the color generated is "+randomColor);
//         alert("red is not my favorite color");
//         break;
//     default:
//         console.log("the color generated is "+randomColor);
//         alert("I have no opinion on " + randomColor);
//         break;
// }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */


// var ucolor = prompt("what is your fav color?").toLowerCase();
// let endResult = analyzeColor(ucolor);
// alert(endResult)


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

let walMartBill = prompt("enter how much your wal mart purchase is worth ");
let luckyNumber = Math.floor(Math.random()*6);
alert("Your random generated lucky number is "+luckyNumber);
switch(luckyNumber){
    case 0:
        alert("your discount is 0");
        alert("your total is still $"+walMartBill);
        break
    case 1:
        alert("your discount is 10%");
        let total =walMartBill-(walMartBill*.1);
        alert("your total is $"+total);
        break
    case 2:
        alert("your discount is 25%");
        let total1 = walMartBill-(walMartBill*.25)
        alert("your total is $"+total1);
        break;
    case 3:
        alert("your discount is 35%");
        let total2 = walMartBill-(walMartBill*.35)
        alert("your total is $"+total2);
        break;
    case 4:
        alert("your discount is 50%");
        let total3 = walMartBill-(walMartBill*.5)
        alert("your total is $"+total3);
        break;
    case 5:
        alert("your discount is 100!!!");
        alert("your total is $0!!");
        break;
}



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
//1 make confirm  if user wants inputs number
//2 assign confirm var boole
//3 if conf var is true prompt user for number ,store to varia, wrap number
//4 alert number as even
// 5 add and alert number to a function
//6 check if numb is Nan
//7 if user input is NaN
//
// var isTrue = confirm("input a number");
// if (isTrue){
//     var aNumber = prompt("give number");
//     if (aNumber % 2 === 0){
//         alert("numb is even")
//     }else if(aNumber % 2 !== 0)
//         alert("number is odd")
//
// }
//     var newNum = aNumber+100;
// alert(`${aNumber}+100 = ${newNum}`)
// if(aNumber <0 ){
//     alert("is neg")
// }else if(aNumber>0){
//     alert("is pos")
// }else if(isNaN(aNumber)){
//     alert("is not a number!!")
// } else if (aNumber = 0){
//     alert("is zero!!!")
//     else(){
//         alert("is nothign!")
//     }
// }