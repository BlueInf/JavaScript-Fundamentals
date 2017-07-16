/**
 * Created by User on 7/15/2017.
 */
function censor(input){
    "use strict";
    RegExp.escape= function(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    };
    let text=input[0];
    let words=input.slice(1)
    for(let w of words){
        let replaced='-'.repeat(w.length);
        let regex=new RegExp(RegExp.escape(w),'g')
        text=text.replace(regex,replaced);
    }
    console.log(text);
}
censor(['You love apples and [bananas]','apples','[bananas]']);
/*
Second option !!!

function censor(input){
 RegExp.escape= function(s) {
 return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
 };
 let text=input[0];
 let words=input.slice(1).map(RegExp.escape).join('|');
 let regex=new RegExp(words,'g);
 text=text.replace(regex,w=>'-'.repeat(w.length));
 return text;
 }

 */