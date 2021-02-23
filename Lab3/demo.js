//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/


console.log("console log - hello world");//log in developer tools
var globalX = 100;//global scope

function hello() //function definition
{
    alert("alert - hello world!");//popup window    
}

function add()//function definition
{
    var x = 3;
    var y = 5;
    var sum = x + y;
    alert("Sum is " + sum);
}

function substract()
{
    var a = 1000;
    var b = 100;
    var diff = a - b;
    alert("Difference is" + diff);
}

function multiply()
{
	var c = 25;
	var d = 42;
	var prod = c * d;
	alert("Product is " + prod);
}

function divide()
{
	var e = 48; 
	var f = 12;
	var div = e / f;
	alert("Dividend is " + div);
}

function average()
{
	var mean = [25, 47, 98, 46, 52];
	var total = 0;
	for (var i = 0; i < mean.length; i++)
	{
		total += mean[i];
	}
	var avg = total/mean.length;
	alert("The mean of the numbers is " + avg);  
}

function even()
{
	var sum = 0;
	for (var i = 2; i < 200; i++)
	{
		if(i % 2 == 0)
		{
			sum += i;
		}
	}
	alert("The sum of all even numbers between 2 and 200 is" + sum);
}

function fibonacci()
{
	const set = 20;
	let n1 = 0, n2 = 1, nextTerm;
	
	for(let i = 1; i <= set; i++)
	{
		console.log(n1);
		nextTerm = n1 + n2;
		n1 = n2;
		n2 = nextTerm;
	}
}
//Homework Lab- Complete Multiplication and Division functionality

function increment()
{ 
    var y = 10;//local scope - resets y everytime function is called
    globalX = globalX+10;//can add any number to itself
    //y = y+10;
    y+=10;//same as y = y+10;
    alert("x="+globalX + "y="+y); 

}

/* JS statements
Conditional statements:
If statement
Switch statement
Loops:
For loop
While loop
Do while loop
Break
*/

function compare()
{
    var charlie = 120;
    var john = 120;
    
    //conditional if statement
    
    if (charlie > john)
    {
        alert("Charlie is taller");
    }
    else if( charlie == john)//"=" is assignment; "==" is comparison
    {
        alert("Charlie and John are of the same height");
    }
    else
    {
        alert("John is taller");
    }

}

function IsTropical(fruit)//fruit is a variable and is an input parameter
{
    
    var isTropical = false; //boolean variable: True or False

    switch(fruit)
    {
        case "banana":
            isTropical = true;
            break;

        case "papaya":
            isTropical = true;
            break;

        case "tomato":
            isTropical = false;
            break;

        case "mango":
            isTropical = true;
            break;

        case "watermelon":
            isTropical = true;
            break;

        default:
            isTropical = false;            
    }

    alert("Is "+ fruit+ " tropical?"+ isTropical );

}

function Repeat( message )
{
    var counter = 0;
    console.log("While loop:");
    while (counter < 5)
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    }

    counter = 0;
    console.log("Do - While loop:");
    do 
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    } while (counter < 5);

    console.log("For loop:");
    /************************************************* */
    for(var counter=0; counter < 5; counter++)
    {
        console.log(message);
    }
}
