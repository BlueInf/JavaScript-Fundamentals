/**
 * Created by User on 7/22/2017.
 */

function findNumbers(string) {
    "use strict";
    let text=string.join(" ");
   /* for (let i = 0; i < string.length; i++) {
        text+=string[i];
    }
    */
    let pattern = /\d+/g;
    let result = text.match(pattern);
    console.log(result);
}

findNumbers(['This is a sample text 120213, 4530 , dajs 2 31 123','laino','hahahah12']);