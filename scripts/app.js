
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

InitApp();

window.addEventListener("resize", InitApp);

function InitApp()
{
	console.log("r");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}