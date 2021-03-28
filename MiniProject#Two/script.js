//Global area
window.onload=function() {
//Try and use classname to get a group of divs instead of getting them one by one by id
//if you are writing the same type of code multiple times, you are doing it incorrect
	var colObj = document.getElementsByClassName("col");
//Attach events using eventlistener here
	for(var i=0; i<colObj.length; i++)	{
		colObj[i].addEventListener("click", function()	{
			userTurn(this);
		});
	}
	for(var i=0; i<colObj.length; i++)	{
		colObj[i].addEventListener(userTurn(colObj), function()	{
			computerTurn(this);
		});
	}
}

/************** Function area *******************/

//function provided. Add parameter(s) if needed
function userTurn(colObj)
{
    //Add code here
    colObj.innerHTML = "X";

}

//function provided. Add parameter(s) if needed
function computerTurn()
{
    //Add code here
    if(colObj == ""){
    	colObj.innerHTML = "O";
	break;
    }
	
	
}

