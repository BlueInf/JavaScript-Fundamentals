/**
 * Created by User on 7/4/2017.
 */
function chessboard([n]){
    let html='<div class="chessboard">\n';
    for (let i = 0; i < n; i++) {
        html+="\t<div>\n";
        html+="\t</div>\n";
    }
    html+="</div>\n";
    return html;
}
console.log(chessboard([3]));