var cards = ['queen', 'queen', 'king', 'king', 'queen', 'queen', 'king', 'king', 'queen', 'queen'];
var cardsInPlay = [];
	
var gameBoard = document.getElementById('game-board');

var createBoard = function() {
		for (var i = 0; i < cards.length; i++) {
			var makeCard = document.createElement('div');
			makeCard.className = 'card';
			makeCard.setAttribute('data-card', cards[i]);
			makeCard.addEventListener('click', isTwoCards);

			gameBoard.appendChild(makeCard);
			gameBoard.appendChild(makeCard);
	}
};

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'queen') {
		this.innerHTML = "<img src='http://i.imgur.com/l8bEcps.png'>";
	}
	else {
		this.innerHTML = "<img src='http://i.imgur.com/oSLKSVk.png'>";
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
};

var isMatch = function(cards) {
	if (cards[0] === cards[1]) {
	alert('Matchy Matchy!');
	} 
	else {
	alert('Sorry, better luck next time.');
	}
};

createBoard();
isMatch();
isTwoCards();
	





