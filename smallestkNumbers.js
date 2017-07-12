/**
 * Created by User on 7/13/2017.
 */
function sol(k,arr){
    "use strict";
    arr.sort((a,b)=>a-b);
    let result=arr.slice(0,k);
    console.log(result.join(' '));
}