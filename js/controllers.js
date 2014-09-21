var xmaspicsControllers = angular.module('xmaspicsControllers', []);

xmaspicsControllers.controller('SplashController', function ($scope) {
	
	//fade in current date on startup
	$scope.currentDate = new Date().getDate(); 
	var number = document.getElementById("homescreen-number");
	TweenLite.to(number, 3, {opacity: "1",
							fontSize: "150px",
							ease:Bounce.easeOut});
	
	$scope.showSlideshow = false;
	$scope.startSlideshow = function() {
		$scope.showSlideshow = true;
		
		//start zoom animation
		var image1 = document.getElementById("p1");
		var image2 = document.getElementById("p2");
		
		var tl = new TimelineLite({});
		tl.to(image1, 5, {scale: 2, ease: Linear.easeNone})
		  .to(image2, 5, {scale: 2, ease: Linear.easeNone}, "-=1.0");
		
		var tl2 = new TimelineLite({});
		tl2.to(image1, 0.3, {opacity: 0, delay: 4.5, ease: Linear.easeNone});
	}
	
});

xmaspicsControllers.controller('MemoryController', function ($scope) {
	$scope.cards = 
		[ {"id": "1", "imgDeck": "img/01/card_hidden.jpg", "img": "img/01/1.jpg", "deckVisible": true},
		  {"id": "2", "imgDeck": "img/01/card_hidden.jpg", "img": "img/01/2.jpg", "deckVisible": true},
		  {"id": "3", "imgDeck": "img/01/card_hidden.jpg", "img": "img/01/1.jpg", "deckVisible": true},
		  {"id": "4", "imgDeck": "img/01/card_hidden.jpg", "img": "img/01/2.jpg", "deckVisible": true}
		];
	
	$scope.flipCard = function(card) {
		//toggle deckVisible property
		card.deckVisible = card.deckVisible ? false : true;
	}
	
	
});