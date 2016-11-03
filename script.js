var action = 1;

function changeColor() {
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

function mOverGit() {
	console.log ("true")
	document.getElementById("text").innerHTML = "Github";
}
function mOverMail() {
	console.log ("true")
	document.getElementById("text").innerHTML = "Mail";
}
function mOverInfo() {
	console.log ("true")
	document.getElementById("text").innerHTML = "Info";
}
function mOverBook() {
	console.log ("true")
	document.getElementById("text").innerHTML = "Book";
}
function mOverFolder() {
	console.log ("true")
	document.getElementById("text").innerHTML = "Folder";
}
function mOut() {
	document.getElementById("text").innerHTML = "Jis van Overschot";
}