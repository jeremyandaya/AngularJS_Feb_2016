angular.module('GradeServices', [])


.service('AverageCalc', function() {
	var self = this;

	self.calculateAverage = function(a, b) {
		return a + b;
	};
})

.service('Assignment', function(){
	var self = this;

	function Assignment(assignment, grade){
		this.assignment = assignment;
		this.grade = grade;
	};

	return Assignment;

})


.factory('Gradebook', function(){

	function Gradebook(){
		this.student = "Jeremy";
		this.assignments = [];
		this.finalGrade = 'n/a'
		this.average = "0";
		this.passing = true;
	};

	Gradebook.prototype.addToAssignments = function(assignment, grade) {

		this.assignments.push({assignment: assignment, grade: grade});
	};
	
	return Gradebook;
})

// .factory('Student', function() { // angular

// 	// javascript start
// 	function Student(name) {
// 		this.name = name;
// 	}

// 	Student.prototype.setAssignment = function(assignment) {
// 		this.assignment = assignment;
// 	};

// 	Student.prototype.setGrade = function(grade) {
// 		this.grade = grade;
// 	};

// 	// javascript end

// 	return Student; // angular (MUST HAVE THIS FOR FACTORIES!!!)

// })