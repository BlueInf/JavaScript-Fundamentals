/**
 * Created by User on 7/11/2017.
 */
function sol(input){
    "use strict";
    let res=[];
    for (let i = 0; i < input.length; i++) {
        if(input[i]>=0)res.push(input[i]);
        else res.unshift(input[i]);//push element in the left side of array
    }
    console.log(res);
}
sol(['3','-2','-4','5']);