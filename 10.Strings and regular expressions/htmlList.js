/**
 * Created by User on 7/21/2017.
 */
function htmlList(items){
    "use strict";
    return '<ul>\n'+
            items.map(htmlEscape).map(
                item=>` <li>${item}</li>`).join('\n')+
                    '</ul>\n';
}