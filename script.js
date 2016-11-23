var action = 1;

function changeColorHome() {
	var x = document.getElementById("bg");
	var y = document.getElementById("fontcolor");

	if(action==1) {
		x.style.backgroundColor = "black";
		y.style.filter = "invert(100%)";
		action = 2;
	}
	else if(action==2) {
		x.style.backgroundColor = "white";
		y.style.filter = "invert(0%)";
		action = 1;
	}
}

function changeColorOpleiding() {
	var x = document.getElementById("bg");
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

function mOverInfo() {
	document.getElementById("text").innerHTML = "Info";
}
function mOverBook() {
	document.getElementById("text").innerHTML = "Opleiding";
}
function mOverFolder() {
	document.getElementById("text").innerHTML = "Folder";
}
function mOverGit() {
	document.getElementById("text").innerHTML = "Github";
}
function mOverMail() {
	document.getElementById("text").innerHTML = "Mail";
}
function mOut() {
	document.getElementById("text").innerHTML = "Jis van Overschot";
}
var value = 1;

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
		y.style.height = "auto";
		x.style.display = "none";
		z.style.display = "none";
		value = 1;
	}
}

function zoom() {
	var z = document.getElementById("ps-img");

	if(screen.width > 700 && value==1) {
		z.style.width = "100%";
		z.style.cursor = "zoom-out";
		value = 2;
	}
	else if(screen.width > 700 && value==2) {
		z.style.width = "61%";
		z.style.cursor = "zoom-in";
		value = 1;
	}
}

function onload() {

	comicSans();

	if (document.URL.indexOf("info.html") != -1) {
		currentAge();
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
	}
}