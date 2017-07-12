/**
 * Created by User on 7/13/2017.
 */

function sol(arr){
    "use strict";
    let k=Number(arr.shift());
    console.log(arr.slice(0,k).join(' '));
    console.log(arr.slice(arr.length-k,arr.length).join(' '));
}
sol(['2','1','3','4','3','45']);