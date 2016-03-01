angular.module('StudentGradeCalcApp', ['GradeServices'])


.controller('MainController', function(Assignment, Gradebook) {

	var self = this;

	// self.studentName = '';
	// self.studentAssignment = '';
	// self.studentGrade = '';

	// self.addAssignment = function() {
	// 	// self.myAssignment.push();
	// 	console.log('SUCCESS!');
	// };

	self.gradebook = new Gradebook();

})





