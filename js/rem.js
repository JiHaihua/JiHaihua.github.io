
window.onload = function(){
    getRem(320,100)


	var footer=document.getElementsByClassName('footer')[0];
	var li1=footer.querySelectorAll('ul > li')[0]
	var li2=footer.querySelectorAll('ul > li')[1]
	var li3=footer.querySelectorAll('ul > li')[2]
	var li4=footer.querySelectorAll('ul > li')[3]
	li1.onclick=function(){
		location.href="index.html"
	}
	li2.onclick=function(){
		location.href="fy1.html"
	}
	li3.onclick=function(){
		location.href="fy2.html"
	}
	li4.onclick=function(){
		location.href="fy3.html"
	}
};
window.onresize = function(){
    getRem(320,100)
};
function getRem(pwidth,prem){
    var html = document.getElementsByTagName("html")[0];
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = oWidth/pwidth*prem + "px";
	
}



/*链接*/
