/**
 * Created by User on 7/14/2017.
 */
function sol(arr){
    "use strict";
    let allstr=arr.join('');
    let chars=Array.from(allstr);
    let revstr=(chars.reverse()).join('');
    console.log(revstr);
}
let arr=['I','am','student'];
sol(arr);