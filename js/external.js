"use strict";


console.log("greetings from external JS!");
alert("Welcome to the Jungle!!");
let favcolor = prompt("what is ur fav color?");
alert("Great! only losers like the color " + favcolor);


var lilMerm, broB, herc;
lilMerm = prompt("how many days did you rent Little Mermaid?");
broB = prompt("how many days did you rent Brother Bear?");
herc = prompt("how many days did you rent hercules");
var price = 3;
var total = price * (Number(lilMerm) + Number(broB) + Number(herc));
alert("the total amount you will pay for the movies is $" + total);

const googlePay = 400, amazonPay = 380, metaPay = 350;

// google hours is 6, facebook is 10, amazon is 4
var googleHrs = prompt("how many hours did you work for Google?");
var amazonHrs = prompt("how many hours did you work for Amazon?");
var metaHrs = prompt("how many hours did you work for Meta?");

var totalPay = Number(googlePay * googleHrs + amazonPay * amazonHrs + metaPay * metaHrs);

alert("You got paid $" + totalPay + "Good for you!!");

var isFull = prompt("Is the class full? true/false");
let isVeryFull = JSON.parse(isFull);

var hasConflict = prompt("the class schedules have conflicts true/false?");

let hasSchedConflict = JSON.parse(hasConflict);
var isEnrolled = (!hasSchedConflict && !isVeryFull);
alert("The student can be enrolled (true/false)? " + isEnrolled)
var isPremiumMember = prompt("is this person a premium member? true/false");

var offerExp = prompt("has the offer expired true/false?");

var itemsPurchased = prompt("how many items has this person purchased?");

itemsPurchased = Number(itemsPurchased);

isPremiumMember = JSON.parse(isPremiumMember);

// offerexp = JSON.parse(offerExp);

var productOffer = (itemsPurchased > 2 && !offerExp) || isPremiumMember;

alert("The customer is owed a product offer (true or false)" + productOffer);