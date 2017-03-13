var action = 1;
var value = 1;
	
function changeColorHome() {
	lineAnimation();
}

function changeColor() {
	var x = document.getElementsByTagName("body")[0];
	var y = document.getElementById("fontcolor");
	var z = document.getElementById("h2color");

	if(action==1) {
		x.style.backgroundColor = "black";
		y.style.filter = "invert(100%)";
		z.style.filter = "invert(100%)";
		action = 2;
	}
	else if(action==2) {
		x.style.backgroundColor = "white";
		y.style.filter = "invert(0%)";
		z.style.filter = "invert(0%)";
		action = 1;
	}
}

function feedbackOpen() {
	var feedback = document.getElementById("feedback-bg");

	feedback.style.display = "block";
}

function feedbackClose() {
	var feedback = document.getElementById("feedback-bg");
	
	feedback.style.display = "none";
}

function logoLink() {
	window.location.href = "index.html";
}

function mOver(a) {
	if( ! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
 		document.getElementById("text").innerHTML = a;
	}
	else {
		document.getElementById("text").innerHTML = "Jis van Overschot";
	}
}
function mOut() {
	document.getElementById("text").innerHTML = "Jis van Overschot";
}

function showMenu() {
	var y = document.getElementById("fontcolor");
	var x = document.getElementById("links");
	var z = document.getElementById("social");

	if(value==1) {
		y.style.height = "100%";
		x.style.display = "block";
		z.style.display = "block";
		value = 2;
	}
	else if(value==2) {
		y.style.height = "initial";
		x.style.display = "none";
		z.style.display = "none";
		value = 1;
	}
}

function zoom() {
	var z = document.getElementById("ps-img");

	function scrollDown() {
		window.scrollBy(0, 450);
	}

	if(screen.width > 700 && value==1) {
		z.style.width = "100%";
		z.style.cursor = "zoom-out";
		setTimeout(scrollDown, 1000);
		value = 2;
	}
	else if(screen.width > 700 && value==2) {
		z.style.width = "350px";
		z.style.cursor = "zoom-in";
		value = 1;
	}
}

function lineAnimation() {
	var x = document.getElementsByClassName("box")[0];
	x.style.animationName = "lines";
	x.style.animationDuration = "7.5s";
	setTimeout(function(){x.style.animationName = "none";
	x.style.animationDuration = "0s";}, 2700);
}

function comicSans() {
	var today = new Date();
	var dd = today.getDate();
	var ww = today.getDay()+1;
	var mm = today.getMonth()+1;

	if (dd<=6 && mm==7 && ww==6) {
		var q = document.getElementsByTagName("body")[0];
		var p = document.getElementsByTagName("h1")[0];
		q.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
		p.style.fontSize = "3.15em";
	}
}

function currentAge() {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yy = today.getYear();
	var age = document.getElementById("age");

	if (dd>=2 && mm>=8) {
		age.innerHTML =  yy - 99;
	}
	else {
		age.innerHTML = yy - 1 - 99;
	}
}

function yearNow() {
	var today = new Date();
	var yy = today.getYear();
	var year = document.getElementById("year");

	year.innerHTML = yy + 1900;
}

function loadingHome() {
	changeColorHome();
}

function loading() {
	if (document.URL.indexOf("index.html") != -1) {
		return;
	}
	else {
		yearNow();
	}

	if (document.URL.indexOf("info.html") != -1) {
		currentAge();
	}
}