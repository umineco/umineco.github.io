var blogtitle ="Empty Necoset"; //ブログタイトル
var webmaster ="鴎海ねこ"; //管理者


var bltit =document.getElementsByClassName("blog-title");
for(i=0; i<bltit.length; i++){bltit[i].innerHTML =blogtitle;}

var webm =document.getElementsByClassName("webmaster");
for(i=0; i<webm.length; i++){webm[i].innerHTML =webmaster;}