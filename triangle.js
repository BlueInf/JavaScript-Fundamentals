/**
 * Created by User on 7/5/2017.
 */
function printStars(n){
    "use strict";
    console.log('*'.repeat(n));
}
function printTriangle(size){
    "use strict";
    for (let i = 1; i <=size; i++) {
        printStars(i);
    }
    for(let i=size-1;i>=1;i--) printStars(i);
}
