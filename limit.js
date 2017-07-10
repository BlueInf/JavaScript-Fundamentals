/**
 * Created by User on 7/10/2017.
 */
function sol(speed,zone){
    "use strict";

    let limit=getSpeed(zone);
    let overLimit=speed-limit;

    if(overLimit>40) console.log('reckless speeding');
    else if(overLimit>20) console.log('excessive speeding');
    else if(overLimit>0) console.log('speeding');

    function getSpeed(input){
        switch(input){
            case 'motorway':return 130;
            case 'interstate': return 90;
            case 'city': return 50;
            case 'residential':return 20;
        }
    }
}
sol('120','interstate')