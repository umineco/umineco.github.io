var ogurl ="https://umineco.github.io/blog/article-test01"; //OGP:URL
var ogimage ="https://raw.githubusercontent.com/umineco/umineco.github.io/main/image/thumbnail-1.png"; //OGP:画像
var pagetitle =articletitle+" - "+blogtitle; //ページタイトル
var secpath ="ブログ"; //第2パス
var secpathurl ="/blog"; //第2パスURL
var articletitle ="記号論理と圏";//記事タイトル
var datepub ="2021/9/23 - "; //発行日時
var articlenext ="次の記事" //次の記事
var articlenexturl ="/blog/next" //次の記事URL
var articleprev ="前の記事" //前の記事
var articleprevurl ="/blog/prev" //前の記事URL


document.getElementById("og-url").setAttribute("content",ogurl)

document.getElementById("og-title").setAttribute("content",pagetitle) //OGP:タイトル

document.getElementById("og-type").setAttribute("content","article")

document.getElementById("og-image").setAttribute("content",ogimage)

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