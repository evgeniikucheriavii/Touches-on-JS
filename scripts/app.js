
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const sensitivity = 20;

const msgBox = document.getElementById("msg-box");

var touchStart = null;
var touchPosition = null;

InitApp();

window.addEventListener("resize", InitApp);

canvas.addEventListener("touchstart", function (e) { TouchStart(e); });
canvas.addEventListener("touchmove", function (e) { TouchMove(e); });
canvas.addEventListener("touchend", function (e) { TouchEnd(e, "green"); });
canvas.addEventListener("touchcancel", function (e) { TouchEnd(e, "red"); });

function InitApp()
{
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

function TouchStart(e)
{
	touchStart = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
	touchPosition = { x: touchStart.x, y: touchStart.y };

	Draw(touchPosition.x, touchPosition.y, 6, "blue");	
}

function TouchMove(e)
{
	touchPosition = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
	Draw(touchPosition.x, touchPosition.y, 2);
}

function TouchEnd(e, color)
{
	DrawLine();
	Draw(touchPosition.x, touchPosition.y, 6, color);

	CheckAction();

	touchPosition = null;
}

function CheckAction()
{
	var d = 
	{
		x: touchStart.x - touchPosition.x, 
		y: touchStart.y - touchPosition.y
	};

	var msg = "";

	if(Math.abs(d.x) > Math.abs(d.y))
	{
		if(Math.abs(d.x) > sensitivity)
		{
			if(d.x > 0) //Left
			{
				msg = "Swipe Left";
			}
			else //Right
			{
				msg = "Swipe Right";
			}
		}
	}
	else 
	{
		if(Math.abs(d.y) > sensitivity)
		{
			if(d.y > 0) //Up
			{
				msg = "Swipe up";
			}
			else //Down
			{
				msg = "Swipe down";
			}
		}
	}

	msgBox.innerText = msg;

}

function Draw(x, y, weight, color = "#000")
{
	ctx.fillStyle = color;

	let weightHalf = weight / 2;

	ctx.fillRect(x - weightHalf, y - weightHalf, weight, weight);
}

function DrawLine()
{
	ctx.strokeStyle = "#ccc";

	ctx.beginPath();

	ctx.moveTo(touchStart.x, touchStart.y);
	ctx.lineTo(touchPosition.x, touchPosition.y);

	ctx.stroke();
}