// var myMod = angular.module('MyApp', []);
// myMod.controller('MainController', function($scope) {
// 	$scope.myGreeting = "Hello Earth!!!";
// });


angular.module('MyApp', [])

.controller('MainController', function() {

	var baloney = this;
	baloney.myGreeting = "Hello Earth!!!";

	baloney.simpleArray = ['Toyota', 'Honda', 'Mazda'];

	baloney.interArray = [{
		name: 'batman'
	}, {
		name: 'superman'
	}, {
		name: 'aquaman'
	}];

	baloney.states = {
		CA: 'Cali',
		NY: 'Big Apple',
		FL: 'Disneyland'
	};

	baloney.username = 'Scrappy Coco';

	baloney.myLion = {
		name: 'Max'
	};

	baloney.myTiger = {
		name: 'George'
	};

	baloney.myPuma = {
		name: 'Jumpy'
	};

	baloney.onButtonClick = function() {
		alert('you clicked me dude!');
	};

	baloney.classObject = {
		red: true,
		green: false,
		blue: false
	};



});