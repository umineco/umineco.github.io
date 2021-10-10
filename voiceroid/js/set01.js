var secpath ="ボイロ関連"; //第2パス
var secpathurl ="/voiceroid"; //第2パスURL
var articletitle ="集合論メモ#1"
var pagetitle =articletitle+" - "+blogtitle; //ページタイトル
var datepub ="2021/10/10 - "; //発行日時
var articlenext ="集合論メモ#2"; //次の記事
var articlenexturl ="set02.html"; //次の記事URL
var articleprev =""; //前の記事
var articleprevurl ="#"; //前の記事URL

document.getElementById("page-title").innerHTML =pagetitle

document.getElementById("path-2").innerHTML =secpath
document.getElementById("path-2").setAttribute("href",secpathurl)

var artit =document.getElementsByClassName("article-title");
for(i=0; i<artit.length; i++){artit[i].innerHTML =articletitle;}

document.getElementById("date-published").innerHTML =datepub

var chg =new Date(document.lastModified);
var year =chg.getFullYear();
var month =chg.getMonth()+1;
var date =chg.getDate();
var datechg =year+"/"+month+"/"+date;
document.getElementById("date-changed").innerHTML =datechg //最終更新日

document.getElementById("article-next").innerHTML =articlenext
document.getElementById("article-next").setAttribute("href",articlenexturl)

document.getElementById("article-prev").innerHTML =articleprev
document.getElementById("article-prev").setAttribute("href",articleprevurl)

var copyrightyear =document.getElementById("copyright-year");
if(year>2021){copyrightyear.innerHTML ="-"+year}