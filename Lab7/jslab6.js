/*********************************************************************/
//Global Area




/***************** Function definition area *************/
//write a function to change the size of the box (css)
function createLink()	{
	var parent = document.getElementById("parentLink");
	var child = document.createElement("a");
	child.setAttribute("href", "https://tri-c.edu");

	parent.appendChild(child);
}

function removeLink()	{
	var parent = document.getElementById("parentLink");
	var child = parent.lastElementChild;

	parent.removeChild(child);
}

function changeColor()	{
	var x = document.getElementById("inputColor").value;

	var box1 = document.getElementById("box");
	box1.style.backgroundColor = x;	
}

function changeSquares()	{
	var x = document.getElementsByClassName("square1");
	for (i=0; i<x.length; i++){
		x[i].style.backgroundColor = "black";
	}
	var y = document.getElementsByClassName("square2");
	
	for (i=0; i<y.length; i++){
		y[i].style.backgroundColor = "white";
	}
}

function changeShape()	{
	var x = document.getElementsByClassName("square1");
	var inputRadius = document.getElementById("inputRadius").value;

	for(i=0; i<x.length; i++)	{
		x[i].style.borderRadius = inputRadius; 
	}
}
