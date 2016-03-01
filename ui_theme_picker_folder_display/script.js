// var myMod = angular.module('MyApp', []);
// myMod.controller('MainController', function($scope) {
// 	$scope.myGreeting = "Hello Earth!!!";
// });


angular.module('MyApp', [])

.controller('MainController', function() {

	var self = this;


	// code for Theme picker
	self.colorSelected = {

	},

	self.ngvalueRed = {
		cssRed: true,
		divOneBgColorNgClass: {
			divOneBgColorCssRed: true
		},
		divTwoBgColorNgClass: {
			divTwoBgColorCssRed: true
		}
	},

	self.ngvalueGreen = {
		cssGreen: true,
		divOneBgColorNgClass: {
			divOneBgColorCssGreen: true
		},
		divTwoBgColorNgClass: {
			divTwoBgColorCssGreen: true
		}
	},

	self.ngvalueBlue = {
		cssBlue: true,
		divOneBgColorNgClass: {
			divOneBgColorCssBlue: true
		},
		divTwoBgColorNgClass: {
			divTwoBgColorCssBlue: true
		}
	},

	self.ngvalueYellow = {
		cssYellow: true,
		divOneBgColorNgClass: {
			divOneBgColorCssYellow: true
		},
		divTwoBgColorNgClass: {
			divTwoBgColorCssYellow: true
		}
	},

	self.ngvalueOrange = {
		cssOrange: true,
		divOneBgColorNgClass: {
			divOneBgColorCssOrange: true
		},
		divTwoBgColorNgClass: {
			divTwoBgColorCssOrange: true
		}
	},

	self.ngvalueNone = {
		cssNone: true
	}


	self.folderArray = [
		{
			name: 'Personal', 
			files:[]
		}, 
		{
			name:'Work', 
			files:[]
		}, 
		{
			name: 'Trip', 
			files:[]
		}
	],
	
	// code for Folder Display
	self.newFile ='',
	self.folderIndex = 0,

	self.addNewFile = function () {
		self.folderArray[self.folderIndex].files.push({
			name: self.newFile
		});
	}

	self.showFiles = false;

	


});