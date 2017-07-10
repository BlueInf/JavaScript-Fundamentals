/**
 * Created by User on 7/10/2017.
 */
function insideVol(input){
    "use strict";
    for (let i = 0; i < input.length; i+=3)
    {
        let x=Number(input[i]);
        let y=Number(input[i+1]);
        let z=Number(input[i+2]);
        if(isInside(x,y,z)) console.log('inside');
        else console.log('outside');
    }
    function isInside(j,k,l){
        if(j>=10&&j<=50){
            if(k>=20&&k<=80){
                if(l>=15&&l<=50){
                    return true;
                }
            }
        }
        else return false;
    }
}

