/*********************************************************************/
//Global Area
window.onload = function()  {
    var btnObj = document.getElementsByClassName("btnOrig");
    var sqObj = document.getElementsByClassName("square3");

    for(var i=0; i<btnObj.length; i++) {
        btnObj[i].addEventListener("click", function(){
            changeButtonText(this);            
        });
    }
// Square Function
    for(var i=0; i<sqObj.length; i++) {
        sqObj[i].addEventListener("click", function(){
            changeSquare(this);            
        });
    }
}



/***************** Function definition area *************/
function changeButtonText(btnObj)   {
    btnObj.innerHTML = "Active";
}

function changeSquare(sqObj)    {
    sqObj.style.backgroundColor = "green";
}