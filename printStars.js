/**
 * Created by User on 7/6/2017.
 */
function squareOfStars(n){
    "use strict";
    function printStars(count=n){
        console.log('*'+' *'.repeat(count-1));
    }
    for (let i = 1; i <= n; i++) {
        printStars(n);
    }
}
