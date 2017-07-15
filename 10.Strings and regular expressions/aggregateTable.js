/**
 * Created by User on 7/15/2017.
 */
function aggrTable(lines){
    "use strict";
    let res=0;
    let list=[];
    for(let line in lines){
        let townData=line.split('|');//makes an array form the string townData
        let townName=townData[1].trim();// we get the 1 element of townData and erase the spaces
        let currentSum=Number(townData[2].trim());//
        res+=sum;
        list.push(townName);
    }
console.log(list.join(', ')+'\n'+sum);
}
