/**
 * Created by User on 7/4/2017.
 */
function chessboard(n){
    let html='<div class="chessboard">\n';

    for (let row = 0; row < n;row++) {
        let color=(row%2==0)? 'black':'white';
        html+="\t<div>\n";
        for (let col = 0; col < n; col++) {

         html+=`\t\t<span class="${color}"></span>\n`
           color=(color=='white' ) ? 'black':'white';
        }
        html+="\t</div>\n";
    }
    html+="</div>\n";
    return html;
}
