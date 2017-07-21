/**
 * Created by User on 7/21/2017.
 */
function validateEmail(str){
    "use strict";
    let pattern=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/g;
    let result=pattern.test(str);
    if(result==true) console.log('Valid');
    else console.log("Invalid")
}