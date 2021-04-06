//Global area
window.onload=function() {
//Try and use classname to get a group of divs instead of getting them one by one by id
//if you are writing the same type of code multiple times, you are doing it incorrect
	var colObj = document.getElementsByClassName("col");
//Attach events using eventlistener here
	for(var i=0; i<colObj.length; i++)	{
		colObj[i].addEventListener("click", function()	{
			userTurn(this);
			computerTurn(this);
		});
	}
	document.getElementById("reset").addEventListener("click", function()	{
		resetGameBoard(this);
	});
}

/************** Function area *******************/

//function provided. Add parameter(s) if needed
function userTurn(colObj)
{
    colObj.innerHTML = "X";
	determineWinner(this);

}

//function provided. Add parameter(s) if needed
function computerTurn()
{
	var colObj = document.getElementsByClassName("col");
	for(var i=0; i<colObj.length; i++)	{
		if(colObj[i].innerHTML == "X" | colObj[i].innerHTML == "O")	{
			continue;
		}
		else	{
			colObj[i].innerHTML = "O";
			break;
		}
	}
	
	determineWinner(this);
	
}

function determineWinner()
{
	var winningPos = [[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6]];

	for(var i=0; i<winningPos.length; i++)	{
		if(winningPos.values = "X")
		{
			document.getElementById("message").innerHTML = "User is the winner!";
		}
		else if(winningPos.values = "O")
		{
			document.getElementById("message").innerHTML = "Computer is the winner!";
		}
		else
		{
			document.getElementById("message").innerHTML = "No winner";
			break;
		}
	}
}

function resetGameBoard()
{
	document.getElementsByClassName("col").innerHTML = "";
}