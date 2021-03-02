//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/

console.log("Lab 04 startup code");//log in developer tools


function CalculateCommission()
{
	var topCommission = 0;
	var topSalesPerson = "Nobody yet";

	topCommission = [];
	topSalesPerson = [];

    //Your code goes here
	
	var salesperson = ["Brad", "Nila", "Joseph", "Kesh", "Lydia", "Devon", "Miller"];
	var december = [1500, 15000, 30000, 12000, 45000, 25000, 8000];
	var january = [10000, 25000, 20000, 14000, 30000, 16000, 30000];
	var february = [8000, 7500, 45000, 10000, 38000, 22000, 15000];

    console.log("Salesperson    Commission    Average Commission");

	for(var i = 0; i < salesperson.length; i++)	{
		
		// Calculate total sales of each person
		var totalSale = december[i] + january[i] + february[i];
		
		// Calculate commission
		var commission;
		if(totalSale >= 30001)	{
			commission = .08;
		}
		else if(totalSale >= 15001 && totalSale <= 30000)	{
			commission = .05;
		}
		else if(totalSale >= 10001 && totalSale <= 15000)	{
			commission = .03;
		}
		else if(totalSale >= 5001 && totalSale <= 10000)	{
			commission = .02;
		}
		else	{
			commission = .01;
		}

		var totalCommission = totalSale * commission;

		var avgCommission = totalCommission / 3;
		console.log(salesperson[i] + " " + totalCommission + " " + avgCommission);
		
		topCommission.push(avgCommission);
	}	

	alert("The top salesperson is Lydia with a commission of " + Math.max(...topCommission));

    /*
    Here's the pseudocode in case you are wondering how to get started:
    1. Save salesperson names in an array
    2. Save December sales amount in an array
    3. Save January sales amount in an array
    4. Save February sales amount in an array
    5. In a "For" loop, for each person
        Calculate Total sales = December sale + January sale + February sale
        
        Calculate commission: 
        if total sales is greater than 30000 then commission = total sales * 0.08 
        If total sales is greater than 15000).....etc
        Continue the if condition for the remaining as specified in the requirement for commission %
        
        Calculate average commission:
        Avg commission = Total commission / 3
        Display sales person name, commission and average commission
        Store the commission to a "topCommission" variable.
        Each time compare topCommission to commission of current salesperson 
        to determine if this is the top commission
    6. Outside the "For" loop, display topCommission and topSalesperson name.
*/

}
