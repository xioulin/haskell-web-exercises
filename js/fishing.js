(function() {
    "use strict";

    // var fishMenu= {}
    //
    // fishMenu.name="Haddock";
    // fishMenu.quantity = 15;


    let fishMenuObject = [
        {
            name:"haddock",
            quantity:15,
            daysFromCatch:9
        },
        {
            name:"tuna",
            quantity:5,
            daysFromCatch:6
        },{
            name:"marlin",
            quantity: 3,
            daysFromCatch:7
        }
    ]

    var fishNameArray = ['carp','salmon']

    for(var i = 0; i<fishMenuObject.length;i++){
       fishNameArray.push(fishMenuObject[i].name);
    }

    console.log(fishNameArray);


    let fishList = document.getElementById("fishList");

    //the property of the fishMenu object is a string

    fishNameArray.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText=item;
        fishList.appendChild(li);
    })





})();

// let fishSpecies= ['haddock','pollock','carp','tuna','prawn'];
//
//
// let fishList = document.getElementById('fishList');
//
// fishSpecies.forEach((item)=>{
//         let li = document.createElement("li");
//         li.innerText=item;
//         fishList.appendChild(li);
//     })

    // document.getElementById("fishies").innerHTML = revFishSp;
