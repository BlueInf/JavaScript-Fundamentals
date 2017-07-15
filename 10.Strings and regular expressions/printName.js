/**
 * Created by User on 7/15/2017.
 */
function extractUsernames(input){
    "use strict";
    let results=[];
    for(let part of input){
        let res='';
        /*let tempArr=part.split('@');
        let alias=tempArr[0];
        let domain=tempArr[1];
        */
        let [alias,domain]=part.split('@');
        res+=alias+'.';
        let partsOfDomain=domain.split('.');
        partsOfDomain.forEach(p=>res+=p[0]);
        results.push(res);
    }
    console.log(results.join(', '));
}
extractUsernames(['adad@gmail.com','dsada@abv.bg']);