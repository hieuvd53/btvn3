var header=document.getElementById("navbar");
var positionNav= header.offsetTop;
window.onscroll=function(){
	
	if(window.pageYOffset>positionNav){
		header.classList.add("fixNav");
	}
	else{
		header.classList.remove("fixNav");
	}
};
// document.getElementById("competitiveAnalysis").onclick=function(){
// 	document.getElementById("tab1").style.display="none";
// 	document.getElementById("tab2").style.display="block";
// 	document.getElementById("tab3").style.display="none";
// 	document.getElementById("tab4").style.display="none";
// }
// document.getElementById("competitiveIntelligence").onclick=function(){
// 	document.getElementById("tab1").style.display="none";
// 	document.getElementById("tab3").style.display="block";
// 	document.getElementById("tab2").style.display="none";
// 	document.getElementById("tab4").style.display="none";
// }
// document.getElementById("productMarketing").onclick=function(){
// 	document.getElementById("tab1").style.display="none";
// 	document.getElementById("tab4").style.display="block";
// 	document.getElementById("tab3").style.display="none";
// 	document.getElementById("tab2").style.display="none";
// }
// document.getElementById("industryReports").onclick=function(){
// 	document.getElementById("tab2").style.display="none";
// 	document.getElementById("tab1").style.display="block";
// 	document.getElementById("tab3").style.display="none";
// 	document.getElementById("tab4").style.display="none";
// }
 
 var contentTab=document.getElementsByClassName("content_tab");
 function btn(num){
 	for( var i=1;i<=contentTab.length;i++){
 		if(i==num){
 			document.getElementById("tab"+i).style.display="block";
 		}
 		else{
 			document.getElementById("tab"+i).style.display="none";
 		}
 	}
 }
 function dialogDisplay(){
 	document.getElementById("btn_comment").style.display="none";
 	document.getElementById("dialog").style.display="block";
 	document.getElementById("btn_cancel").style.display="block";
 }
 function dialogCancel(){
 	document.getElementById("btn_comment").style.display="block";
 	document.getElementById("dialog").style.display="none";
 	document.getElementById("btn_cancel").style.display="none";
 }
 
 document.getElementById("select").addEventListener("change", function(){
  btn(document.getElementById("select").value)
 })
