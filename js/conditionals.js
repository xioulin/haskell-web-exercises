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

*/


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