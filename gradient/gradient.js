var css = document.querySelector("h3");
var c1 = document.querySelector(".c1");
var c2 = document.querySelector(".c2");
var body = document.getElementById("gradient");
function setGrad(){
	body.style.background = 
			"linear-gradient(to right, " 
					+ c1.value 
					+ ", " 
					+ c2.value 
					+ ")";

	css.textContent = body.style.background + ";";
}

c1.addEventListener("input", setGrad);
c2.addEventListener("input", setGrad);
