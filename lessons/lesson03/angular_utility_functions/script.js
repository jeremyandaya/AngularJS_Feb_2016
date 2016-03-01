angular.module('MyApp', [])

.controller('MainController', function() {

	var self = this;

	self.user = {
		fname: 'Jeremy',
		lname: 'Andaya',
		email: 'jeremy@gmail.com'
	}

	self.editNgClick = function() {
		self.isEditing = true;
		self.copyUser = angular.copy(self.user);

	};

	self.doneNgClick = function() {
		self.isEditing = false;
		self.user = angular.copy(self.copyUser);
		
	};

	self.cancelNgClick = function() {
		self.isEditing = false;
		
	};


});


