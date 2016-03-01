angular.module('MyApp', ['MyServices'])


// .value('MY_CARS', [{
// 	make: 'Ford',
// 	model: 'Mustang'
// }, {
// 	make: 'Honda',
// 	model: 'Accord'
// }, {
// 	make: 'Toyota',
// 	model: 'Corolla'

// }])

.controller('SecondController', function(MY_CARS, Car) {
	var self = this;
	self.secondCars = MY_CARS;
	// factory (2 cars)
	self.myCar1 = new Car('Ford');
	self.myCar2 = new Car('Honda');

})

.controller('MainController', function(MathCalculator, MY_CARS, Car, $timeout, $scope, $interval, $log) {

	var self = this;
	self.myCars = angular.copy(MY_CARS); // add angular.copy for this controller only

	
	self.myNewCar1 = new Car('Mitsubishi');
	self.myNewCar1.make = 'Lancer';
	// self.myNewCar2 = new Car();


	// self.myCalc = new MathCalculator();
	// self.myCalc.calculateSum(5,5);
	self.myCalc = MathCalculator.calculateSum(20,4);
	console.log(MathCalculator.calculateSum(18,4));








	self.addCar = function(){
		self.myCars.push({
			make: 'BMW',
			model: 'M3'
		})
	}

	// self.greeting = 'Hello World!';

	// $timeout(function(){
	// 	console.log('timeout occured');
	// 	self.greeting = 'New Hello World!';
	// }, 2000);

	// self.count = 10

	// $interval(function(){
	// 	self.count--;

	// }, 1000, self.count);




});