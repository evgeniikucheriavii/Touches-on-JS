
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var touchPosition = null;

InitApp();

window.addEventListener("resize", InitApp);

canvas.addEventListener("touchstart", function (e) { TouchStart(e); });
canvas.addEventListener("touchmove", function (e) { TouchMove(e); });
canvas.addEventListener("touchend", function (e) { TouchEnd(e); });
canvas.addEventListener("touchcancel", function (e) { TouchEnd(e); });

function InitApp()
{
	console.log("r");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

function TouchStart(e)
{
 
}

function TouchMove(e)
{

}

function TouchEnd(e)
{

}

function Draw(x, y, width)
{

}