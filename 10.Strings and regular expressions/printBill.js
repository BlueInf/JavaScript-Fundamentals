/**
 * Created by User on 7/15/2017.
 */
function printBill(list){
    "use strict";
    let billItems=list.filter((a,i)=>i%2==0);
    let sum=list.filter((a,i)=>i%2==1).map(Number).reduce((a,b)=>a+b);
    console.log(`You purchased ${billItems.join(', ')} for a total sum of ${sum}`);
}
