(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ["ishmael","quequed","starbuck","ahab"];

    names.forEach(function(name){
        console.log(name);
    })

    for(var i = 0; i<names.length; i++){
        console.log(names[i]+i);
    }




    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
   for(var i=0; i<names.length; i++){
       console.log(names[i]);
   }


    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (var i = 0; i < names.length; i++) {
        console.log('The name at index ' + i + ' is: ' + names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function(name,index) {
        console.log('The name at index ' + index+' is '+ name);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array

    function returnFirst(array){
        console.log(array[0]);
    }
    var arrayFirstLegalAge = [18,21,25];
    console.log(returnFirst(arrayFirstLegalAge));

     * - second: returns the second item in the array
     */
     function returnSecond(array){
             console.log(array[1]);
         }
    /**
     * - last: returns the last item in the array
     */
    function returnThird(array){
        console.log(array[2]);
    }
    /**

    /**
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    var names =['Dennis','Dee','Mac','Charlie'];

    //    var returnsFirst =  function(){
    //             console.log(names[0])
    //                                 }
    //                                     console.log(returnsFirst(names));
    // var returnsSecond =  function(){
    //     console.log(names[1])
    // }
    // console.log(returnsSecond(names));
    //
    // var returnsLast =  function(){
    //     console.log(names[names.length-1])
    // }
    // console.log(returnsLast(names));

    names.push("Frank");
    console.log(names);

})();