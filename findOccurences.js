/**
 * Created by User on 7/14/2017.
 */
function findOccurences(arrToFind,arr){
    "use strict";
    let p=-1;
    let counter=0;
    while(true){
        p=arr.indexOf(arrToFind,p+1);
        if(p==-1) return counter;
        counter++;
    }
    console.log(counter);
}
findOccurences('arr','I want to find the occurences of arr in arr and arr');

