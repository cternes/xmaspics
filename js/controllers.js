var xmaspicsControllers = angular.module('xmaspicsControllers', []);

xmaspicsControllers.controller('SplashController', function ($scope) {
	
	//fade in current date on startup
	$scope.currentDate = new Date().getDate(); 
	var number = document.getElementById("homescreen-number");
	TweenLite.to(number, 3, {opacity: "1",
							fontSize: "150px",
							ease:Bounce.easeOut});
	
});

xmaspicsControllers.controller('MemoryController', function ($scope) {
	$scope.score = {"points": 0, "attempts": 0};
	$scope.openCards = [];
	$scope.cards = [];
	$scope.grid = [];
	
	var folder = "img/01";
	initCards(folder);
	initGrid();
	
	$scope.flipCard = function(card) {
		//do nothing if card cannot be flipped
		if(!card.deckVisible) {
			return;
		}
		
		//clear open cards from last attempt
		clearOpenCards();
		
		//toggle deckVisible property
		card.deckVisible = card.deckVisible ? false : true;
		
		//add current cards to openCards
		card.canFlipped = false;
		$scope.openCards.push(card);
		
		//when two cards are open, check if they match
		if($scope.openCards.length == 2) {
			checkMatchingCards();
			checkGameSolved();
		}
	}
	
	function initCards(folder) {
		for (var i = 1; i < 9; i++) {
			var card1 = {"id": i, "imgDeck": folder + "/card_hidden.jpg", "img": folder + "/" + i + ".jpg", "deckVisible": true, "isSolved": false};
			var card2 = {"id": i + 9, "imgDeck": folder + "/card_hidden.jpg", "img": folder + "/" + i + ".jpg", "deckVisible": true, "isSolved": false};
			$scope.cards.push(card1);
			$scope.cards.push(card2);
		}
		
		shuffle($scope.cards);
	}
	
	function initGrid() {
		var gridDimension = Math.sqrt($scope.cards.length);
		var i = 0;
		
		for (var row = 0; row < gridDimension; row++) {
			$scope.grid[row] = [];
		    for (var col = 0; col < gridDimension; col++) {
		    	$scope.grid[row][col] = $scope.cards[i];
		        i++;
		    }
		}
	}
	
	function checkMatchingCards() {
		//if cards match, mark cards as not flippable and increase points
		if($scope.openCards[0].img === $scope.openCards[1].img) {
			$scope.openCards[0].deckVisible = false;
			$scope.openCards[1].deckVisible = false;
			$scope.openCards[0].isSolved = true;
			$scope.openCards[1].isSolved = true;
			
			$scope.score.points++;
		}
		
		//always increase attempts
		$scope.score.attempts++;
	}
	
	function checkGameSolved() {
		for (var i = 0; i < $scope.cards.length; i++) {
			if(!$scope.cards[i].isSolved) {
				return;
			}
		}
		
		$scope.score.isGameSolved = true;
	}
	
	function clearOpenCards() {
		if($scope.openCards.length == 2) {
			//do not flip already solved cards again
			if(!$scope.openCards[0].isSolved && !$scope.openCards[1].isSolved) {
				$scope.openCards[0].deckVisible = true;
				$scope.openCards[1].deckVisible = true;	
			}
			
			//always clear openCards 
			$scope.openCards = [];
		}
	}
	
	//+ Jonas Raoni Soares Silva
	//@ http://jsfromhell.com/array/shuffle [v1.0]
	function shuffle(o){ //v1.0
	    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	    return o;
	};
	
});