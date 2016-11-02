

var status = 1;

function changeColor() {
var x = document.getElementById("bg");
var y = document.getElementById("fontcolor");

if(status==1) {
	x.style.backgroundColor = "black";
    y.style.filter = "invert(100%)";
    status = 2;
}
else if(status==2) {
	x.style.backgroundColor = "white";
    y.style.filter = "invert(0%)";
    status = 1;
}

}