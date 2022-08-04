// var daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Thursday','Thursday','Thursday'];
//
// console.log(daysOfTheWeek.length)
// ;

//
// console.log(daysOfTheWeek);
// // ['Monday', 'Tuesday', 'Wednesday', 'Thursday']
//
// // let's add 'Sunday' to the beginning of the week
// daysOfTheWeek.unshift('Sunday');
//
// console.log(daysOfTheWeek);
// // ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
//
// // let's add 'Friday' and 'Saturday' to the end of the week
// daysOfTheWeek.push('Friday', 'Saturday');
//
// console.log(daysOfTheWeek);
// // ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// var todoList = ['Take out the trash', 'Clean the car', 'Pay the bills'];
//


// console.log('My todo list:');
// console.log(todoList);
// // ['Take out the trash', 'Clean the car', 'Pay the bills']
//
// console.log('Completing the last item: ' + todoList[todoList.length - 1]);
//
// // let's remove the last item
// var removedItem = todoList.pop();
//
// // log what we did
// console.log('Task complete: ' + removedItem);
//
// console.log(todoList);
// // ['Take out the trash', 'Clean the car']
//
// console.log('Completing the first item: ' + todoList[0]);

// let's remove the first item
// var doneItem = todoList.shift();
//
// // log what we did
// console.log('Task complete: ' + doneItem);
//
// console.log(todoList);
// // ['Clean the car']


// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'red'];
//
// var index = colors.indexOf('green');
// console.log(index);
// // 3
//
// index = colors.indexOf('red');
// console.log(index);
// // 0
//
// index = colors.lastIndexOf('red');
// console.log(index);
// // 7

// console.log(colors);
// // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
//
// console.log('Reversing the colors array.');
//
// colors.reverse();
//
// console.log(colors);
// // ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']

// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// console.log(colors);
// // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
//
// console.log('Sorting and reversing the colors array.');
//
// colors.sort();
// colors.reverse();
//
// console.log(colors);
// // ['blue', 'green', 'indigo', 'orange', 'red', 'violet', 'yellow']

// console.log(colors.slice(5));

//
// var namesString = "asdf,Jo,e,B,ob,Sally";
//
// console.log(namesString);
// // Joe,Bob,Sally
//
// var namesArray = namesString.split(',');
//
// console.log(namesArray);


// var namesArray = ['Joe', 'Bob', 'Sally'];
//
// console.log(namesArray);
// // ['Joe', 'Bob', 'Sally']
//
// var namesString = namesArray.join('');
//
// console.log(namesString);
// // Joe,Bob,Sally



(function(){
    "use strict";
    var planets = ['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus', 'Neptune'];
    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */
    // console.log(planets);
    // console.log('Adding "The Sun" to the beginning of the planets array.');
    // planets.unshift("The Sun");
    // console.log(planets);
    //
    // console.log('Adding "Pluto" to the end of the planets array.');
    // planets.push('Pluto')
    // console.log(planets);
    //
    // console.log('Removing "The Sun" from the beginning of the planets array.');
    // planets.shift();
    // console.log(planets);
    //
    // console.log('Removing "Pluto" from the end of the planets array.');
    // planets.pop();

    // console.log(planets);
    //
    // console.log('Finding and logging the index of "Earth" in the planets array.');
    // console.log(planets.indexOf("Earth"));

    // console.log("Reversing the order of the planets array.");
    //
    // console.log(planets.reverse().sort());
    //
    // console.log("Sorting the planets array.");
    // console.log(planets.sort());


    var singleDigits = [1,2,3,4,5,6,7,8,9];

    singleDigits.reverse().sort();
    console.log(singleDigits);



})();