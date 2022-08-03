// var x = 2
// while(x<65536){
//     x *= 2;
//     console.log(x);
// }

//
// Do While Loop
// An ice cream seller can't go home until she sells all of her cones.
// First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell
// before you start your loop. Inside of the loop your code should generate another random number between 1 and 5,
// simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of
// cones sold to each person. The below code shows how to get the random numbers for this exercise.

// The output should be similar to the following:
//     5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones
//     1. Finally, commit the changes to your git repository, and push to GitHub.

//steps to take
//1. generate random number between 1 and 50
// var allCones = Math.floor(Math.random() * 50) + 50;
// do {
//     var soldCones = Math.floor(Math.random() * 5) + 1;
//     if(soldCones<allCones){
//         console.log(`${soldCones}cones sold...`);
//         allCones -= soldCones;
//     }else if(soldCones >allCones){
//         console.log(`cannot sell you ${soldCones}, I only have ${allCones}`);
//     }
// }while(allCones !== 0);
// console.log("all cones sold")
//3. inside loop, generate number between 1 and 5
