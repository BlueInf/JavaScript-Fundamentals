/**
 * Created by User on 7/25/2017.
 */
function townToJSON(towns){
    "use strict";
    let townsArr=[];
    for(let town of towns.slice(1)){
        /*let elements=town.split('|')
            .map(t=>t.trim())
            .filter(t=>t!='');
            */
        let [empty,name,lat,lng]=town.split(/\s*\|\s*/);
        let townObj={
            Town:name,
            Latitude:Number(lat),
            Longitude:Number(lng)
        }
        townsArr.push(townObj);
    }
    return JSON.stringify(townsArr);
}

console.log(townToJSON([
    '| Town | Latitude | Longitude |',
    '| Varna | 231 | 23 |',
    '|Sofia |231312| 2310|']));