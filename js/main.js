var xmaspics = angular.module('xmaspics', ['ngAnimate']);

xmaspics.controller('NavigationController', function ($scope) {
	
	//fade in current date on startup
	$scope.currentDate = new Date().getDate(); 
	var number = document.getElementById("homescreen-number");
	TweenLite.to(number, 3, {opacity: "1",
							fontSize: "150px",
							ease:Bounce.easeOut});
	
	$scope.showSlideshow = false;
	$scope.startSlideshow = function() {
		$scope.showSlideshow = true;
	}
	
	$scope.isRight = false;
	
	$scope.animateLogo = function() {
		if($scope.isRight) {
			var logo = document.getElementById("logo");
		    TweenLite.to(logo, 1, {left:"0px"});
			$scope.isRight = false;
		}
		else {
		
			var logo = document.getElementById("logo");
		    TweenLite.to(logo, 3, {left:"632px",
		    		width: "120px",
				    height: "120px",
				    opacity: "1",
		    					   ease:Bounce.easeOut});
			$scope.isRight = true;
		}
	};
	
});