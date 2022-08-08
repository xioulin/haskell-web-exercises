
(function() {
    "use strict";

    var cars = [
        {
            make: "Toyota",
            model: "Camry",
            features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
            owner: {
                name: "Jane Doe",
                age: 30
            }
        },
        {
            make: "Honda",
            model: "Accord",
            features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
            owner: {
                name: "John Doe",
                age: 31
            }
        }
    ];

    console.log("The first car is a " + cars[0].make + " " + cars[0].model + ".");
    console.log("The owner of the second car is " + cars[1].owner.name + ".");

    console.log("Here are all the features of all the cars:");
    cars.forEach(function(car) {
        car.features.forEach(function(feature) {
            console.log(feature);
        });
    });


    // var car = new Object();
    // console.log(typeof car);
    //
    // var users = {
    //     firstName: "dominic",
    //     lastName: "torretto",
    //     occupation: "family",
    //     body: {
    //         height: "66",
    //         weight: "215",
    //         hair: "bald",
    //
    //     }},
    // {
    //     firstName: "paul",
    //     lastName: "walker",
    //     occupation: "family"
    //     body: {
    //         height: "69",
    //         weight: "195",
    //         hair: "blonde",
    //
    //     },
    // }
   // console.log("you're first name is "+user.firstName);

   //  user.age= 49
   // //
   // // alert(`${user.firstName} ${user.lastName} how are you??`)
   //
   //  console.log(user.firstName);


    // console.log(typeof user);
    //
    // var name = "peter"
    // console.log(typeof name); //returns string
    //
    // var planets = ['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus', 'Neptune'];
    // console.log(typeof planets); //returns object
    //
    //
// "object"

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // var person={
    //     firstName: "Piotr",
    //     lastName:  "Chomicki"
    // }
    //     console.log("My name is "+person.firstName);
    //     console.log("My family name is " +person.lastName);

        // person.eat = function(){
        //     alert("pierogies");
        // };
        // console.log(person.eat());

        /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // person.sayHello = function(){
    //     return ("Hello from ")+person.firstName+" "+person.lastName+"!";
    //     }
    // console.log(person.sayHello());


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

        // 1. HEB offers discount for purchases over $200.
        //2. If payer buys more than $200 worth, a 12% discount applies to the total purchse

    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320},
    //
    // ];
    //need to call on each individual shopper and their purchase amount.
    // need to apply a conditional where 12% is applied to amounts over $200


    // shoppers.forEach(function(shopper){
    //     console.log(shopper.amount);
    //     if(shopper.amount>200){
    //         shopper.amount -= shopper.amount*.12
    //
    //     }
    //
    //     var discountAmount = shopper.amount*.12;
    //
    //     console.log(shopper.name + " saved $"+discountAmount.toFixed(2)+" and "+shopper.name+"'s new total is "+shopper.amount+"!");
    // })


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title:"The Grapes of Wrath",
            author:{
                firstName: "John",
                lastName: "Steinbeck"
            },
        },
        {
            title:"The Great Gatsby",
            author:{
                firstName:"F.Scott",
                lastName: "Fitzgerald"
            }
        },

        {
            title:"Pride and Prejudice",
            author:{
                firstName:"Jane",
                lastName: "Austen"
            }
        },
        {
            title:"Moby Dick",
            author:{
                firstName:"Hermann",
                lastName: "Melville"
            }
        },
        {
            title:"The Shining",
            author:{
                firstName:"Stephen",
                lastName: "King"
            }
        }
    ];
    //
    // console.log(books[4].title);



    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function(book,index){
        console.log(`Book # ${index+1}`);
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author.firstName}${book.author.lastName}`);
    })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    var books = [];
    function createBook(title,author){
        var book = {
            title: title,
            author: author
        };
        books.push(book);
        return book;
    }
    console.log(books);
    console.log(createBook("My Book","myAuthor"));
    console.log(books);

    function showBookInfo(book){
        console.log(`Book # ${index+1}`);
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author.firstName}${book.author.lastName}`);
        console.log("---")
    }
    books.forEach(function (book,index){

        showBookInfo(book);
    })
    console.log(showBookInfo(book));
})();
