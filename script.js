var css = document.getElementsByTagName("h3") [0];
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("gradient");
var text = document.querySelector("h3");

var pickColor = () => {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value + ", " + color2.value + ")";
	addColorCode()
}

var addColorCode = () => { 
    text.textContent = "linear-gradient(to right, " 
	+ color1.value + ", " + color2.value + ");";
}

color1.addEventListener("input", pickColor);

color2.addEventListener("input", pickColor);


