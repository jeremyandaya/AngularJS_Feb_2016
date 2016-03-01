angular.module('MyServices', [])


.service('MathCalculator', function() {
	var self = this;

	self.calculateSum = function(a, b) {
		return a + b;
	};
})



.factory('Car', function() { // angular

	// javascript start
	function Car(name) {
		this.name = name;
	}

	Car.prototype.setMake = function(make) {
		this.make = make;
	};

	Car.prototype.setYear = function(year) {
		this.year = year;
	};

	Car.buildGenericCar = function() {
		return new Car('BMW');
	};
	// javascript end

	return Car; // angular (MUST HAVE THIS FOR FACTORIES!!!)

})


.value('hhh', {})

.value('MY_CARS', [{
	make: 'Ford',
	model: 'Mustang'
}, {
	make: 'Honda',
	model: 'Accord'
}, {
	make: 'Toyota',
	model: 'Corolla'

}])