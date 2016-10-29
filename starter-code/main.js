console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
	
function createCards() {
	var gameBoard = document.getElementById('game-board');

	for (var i = 0; i < 4; i++) {
		var makeCard = document.createElement('div');
		makeCard.className = 'card';
		gameBoard.appendChild(makeCard);
	}
}

createCards();
	

/* if (cardOne === cardTwo) {
	alert('You found a match!');
} 
else {
	alert('Sorry, try again.');
}

if (cardThree === cardFour) {
	alert('You found a match!');
}
else {
	alert('Sorry, try again.');
}

if (cardOne === cardThree) {
	alert('You found a match!');
}
else {
	alert('Sorry, try again.');
}
*/


