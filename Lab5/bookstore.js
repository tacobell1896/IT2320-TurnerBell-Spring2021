/********************************************/
//Global scope
//Define book object here 
var books = [
	{name: "Congo",
	author: "Michael Crichton",
	price: 19.99,
	origin: "US"},

	{name: "Annihilation",
	author: "Jeff Vandermeer",
	price: 9.99,
	origin: "US"},

	{name: "Norwegian Wood",
	author: "Haruki Murakami",
	price: 6.99,
	origin: "JPN"},

	{name: "The Three Body Problem",
	author: "Cixin Liu",
	price: 19.99,
	origin: "CN"},

	{name: "Watchmen",
	author: "Alan Moore",
	price: 19.99,
	origin: "UK"},

	{name: "Battle Royale",
	author: "Koushun Takami",
	price: 15.99,
	origin: "JPN"},

	{name: "The Adventures of Tom Sawyer",
	author: "Mark Twain",
	price: 19.99,
	origin: "US"},

	{name: "Jurassic Park",
	author: "Michael Crichton",
	price: 19.99,
	origin: "US"},

	{name: "One Piece Vol. 1",
	author: "Eiichiro Oda",
	price: 9.99,
	origin: "JPN"},

	{name: "Tuesday's with Morrie",
	author: "Mitch Albom",
	price: 5.99,
	origin: "US"},

	{name: "Murder on the Orient Express",
	author: "Agatha Christie",
	price: 10.99,
	origin: "UK"},

	{name: "The Hobbit",
	author: "J. R. Tolkien",
	price: 9.99,
	origin: "CA"}, // Note: J R Tolkien isn't canadian but i am just saying he is for testing purposes

	{name: "Dune",
	author: "Frank Herbert",
	price: 19.99,
	origin: "US"},

	{name: "10 Little Indians",
	author: "Agatha Christie",
	price: 19.99,
	origin: "UK"},

	{name: "The Catcher in the Rye",
	author: "J. D. Sallinger",
	price: 19.99,
	origin: "US"},

	{name: "Sphere",
	author: "Michael Crichton",
	price: 19.99,
	origin: "US"},

	{name: "Prey",
	author: "Michael Crichton",
	price: 10.99,
	origin: "US"},

	{name: "Frankenstein",
	author: "Mary Shelley",
	price: 19.99,
	origin: "UK"},

	{name: "1984",
	author: "George Orwell",
	price: 12.99,
	origin: "UK"},

	{name: "War of the Worlds",
	author: "H G Wells",
	price: 29.99,
	origin: "UK"},
]

/********************************************/
function getDiscountedPrices()
{	
	books.forEach(function(book)
	{
		var discount = getDiscountPercent(book.origin);
		console.log(discount);
		var salePrice = book.price - (book.price * discount); 
		console.log(book.name + " " + book.author + " " + book.price + " " + salePrice);	
	}
	);
}

function getDiscountPercent(origin)
{
	if(origin == "US")	
		return 0.1;
	
	else if(origin == "UK")	
		return 0.05;
	
	else if(origin == "CA")	
		return 0.12;
	
	else	
		return 0.15;
	

}
