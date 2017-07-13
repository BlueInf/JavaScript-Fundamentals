/**
 * Created by User on 7/14/2017.
 */
function sol(arr){
    "use strict";
    if(Arra.isArray(str)) str=str[0];
    let leftPar;
    let rightPar=-1;
    let resStr=[];
    while(true){
        leftPar=arr.indexOf('(',rightPar+1);
        if(leftPar==-1) break;
        rightPar=arr.indexOf(')',leftPar+1);
        if(rightPar==-1) break;
        resStr.push(arr.substring(leftPar+1,rightPar));
    }
    console.log(resStr.join(' '));
}
