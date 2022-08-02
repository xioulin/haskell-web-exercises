"use strict";


/*
var i = 0;

while (i <= 10) {
    console.log('while loop iteration #' + i);
    i = i+(1/3);
}

var x = 0
do{
    ++x
    console.log(x)
}while(x < 21);
console.log("x gonna give it you");

 */

/*
for (var i = -10; i < 10; i++) {
    console.log('for loop iteration #' + i);
}
console.log("X gonna give it to you");*/
/*
for(var num = 0; num <10; num++){
    console.log(num);
}*/

//write a for loop that has a variable initialize to 5. console log number and increment by five until reach 100

for (var init = 5; init <= 100; init=init+5){
    console.log(init);
    if(init === 50){
        continue;
    }
    console.log("init is still less than 100")
}
console.log("X gonna give it to you");