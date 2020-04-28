var colorInput1 = document.querySelector(".color1");
var colorInput2 = document.querySelector(".color2");
var body = document.getElementById("Gradient");
var ColorNumber = document.querySelector("h3");

function applyGradient() {
    body.style.background = 
    "linear-gradient(to right, "
    + colorInput1.value 
    + ", "
    + colorInput2.value 
    + ")";
}

colorInput1.addEventListener("input", applyGradient);
colorInput2.addEventListener("input", applyGradient);