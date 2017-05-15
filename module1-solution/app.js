(function(){
	'use strict';
	angular
	.module('LunchCheck',[])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject=['$scope'];

	function LunchCheckController($scope) {
		$scope.emptyItemsConsidered="";
		$scope.lunchFeedback="";

		$scope.checkLunchItems = checkLunchItems;




		function checkLunchItems(){
			var lunchItems = ($scope.lunchItems).split(',')
			console.log(lunchItems);
			console.log(lunchItems.length);
			if(lunchItems.length <=3){
				$scope.lunchFeedback= 'Enjoy!';
			} else if(lunchItems.length >3) {
				$scope.lunchFeedback= 'Too much!';

			}

		}

	}





})();