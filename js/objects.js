(function () {
    "use strict";

    var aaronRodgers = {};

    aaronRodgers.firstName = "Aaron";
    aaronRodgers.lastName = "Rodgers";
    aaronRodgers.position = "quarterback";
    aaronRodgers.height = "6'2";
    aaronRodgers.age = 39;
    aaronRodgers.numberOfMvpAwards = 4;
    console.log(aaronRodgers.firstName, aaronRodgers.lastName);
    console.log(aaronRodgers);

    // var cars = [
    //     {
    //         make: "Toyota",
    //         model: "Camry",
    //         features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
    //         owner: {
    //             name: "Jane Doe",
    //             age: 30
    //         }
    //     },
    //     {
    //         make: "Honda",
    //         model: "Accord",
    //         features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
    //         owner: {
    //             name: "John Doe",
    //             age: 31
    //         }
    //     }
    // ];
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
    var person = {};
    person.firstName = "Morty";
    person.lastName = "Seinfeld";
    console.log(person.firstName);
    console.log(person.lastName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        return ("hello to " + person.firstName + person.lastName);
    }
    console.log(person.sayHello());
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

    var shoppers = [
        {name: 'Ryan', amount: 250},
        {name: 'Cameron', amount: 180},
        {name: 'George', amount: 320}
    ];

    for(var i = 0; i<shoppers.length; i++){
        if(shoppers[i].amount>=200){
            console.log(shoppers[i].name+" yay is fabulous and will get a 12% discount which is $ ");
            console.log(shoppers[i].amount*.12+shoppers[i].amount);
        }else if(shoppers[i].amount<200){
            console.log(shoppers[i].name+" is a loser and needs to get with the program")
        }
    }
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: "Moby Dick",
            author: {
                firstName: "Herman",
                lastName: "Melville"
            }
        }, {
            title: "50 Shades of Grey",
            author: {
                firstName: "E.L.",
                lastName: "James"
            }
        }, {
            title: "The Great Gatsby",
            author: {
                firstName: "F.Scott",
                lastName: "Fitzgerald"
            }
        }, {
            title: "Old Man and the Sea",
            author: {
                firstName: "Ernest",
                lastName: "Hemingway"
            }
        }, {
            title: "Pride and Prejudice",
            author: {
                firstName: "Jane",
                lastName: "Austen"
            }
        }
    ]

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

    for(var i = 0; i<books.length; i++){
        console.log("Book #"+(i+1)+" title is "+books[i].title)
        console.log("Author is "+books[i].author.firstName+" "+books[i].author.lastName)
    }




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

    var book ={};
    function createBook(title,author){
        book.title = title;
        book.author = author;
    }

    createBook("Gone With the Wind","Margaret Mitchell");
    console.log(book);

    function showBookInfo(book){
        return "The book title is "+book.title+" and the book author is "+book.author;
    }
    console.log(showBookInfo(book))

    // function createBook(title, author) {
    //     var book = {
    //         title: title,
    //         author: author
    //     };
    //     books.push(book);
    //     return book;
    // }

    // console.log(books);
    // console.log(createBook("My Book","myAuthor"));
    // console.log(books);

    // function showBookInfo(book){
    //     console.log(`Book # ${index+1}`);
    //     console.log(`Title: ${book.title}`);
    //     console.log(`Author: ${book.author.firstName}${book.author.lastName}`);
    //     console.log("---")
    // }
    // books.forEach(function (book,index){
    //
    //     showBookInfo(book);
    // })
    // console.log(showBookInfo(book));
})();
