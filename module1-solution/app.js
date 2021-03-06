(function(){
	'use strict';
	angular
	.module('LunchCheck',[])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject=['$scope'];

	function LunchCheckController($scope) {
		$scope.emptyItemsConsidered="";
		$scope.lunchFeedback="";
		$scope.clearFeedback=clearFeedback;

		$scope.checkLunchItems = checkLunchItems;




		function checkLunchItems(){
			$scope.textColorClass='green-text';
			$scope.borderColor=""
			if($scope.lunchItems) {
				let inputLunchItems = ($scope.lunchItems).split(',');
				console.log(inputLunchItems);
				console.log(inputLunchItems.length);
				let lunchItemsList= _.remove(inputLunchItems, function(item) {
					return item !== '' && item !== ' ';
				});
				console.log('after:'+lunchItemsList);
				console.log('after:'+lunchItemsList.length);
				if(lunchItemsList.length === 0){
					$scope.lunchFeedback = 'Please enter proper data first';
					$scope.textColorClass='red-text';
					$scope.borderColor='red-border';
				}else if(lunchItemsList.length >0 && lunchItemsList.length <=3){
					$scope.lunchFeedback= 'Enjoy!';
					$scope.borderColor='green-border';
				} else if(lunchItemsList.length >3) {
					$scope.lunchFeedback= 'Too much!';
					$scope.borderColor='green-border';
				}

			} else {
				$scope.lunchFeedback= 'Please enter data first'
				$scope.textColorClass='red-text';
				$scope.borderColor='red-border';
			}
			

		}

		function clearFeedback() {
			$scope.lunchFeedback="";

		}

	}





})();