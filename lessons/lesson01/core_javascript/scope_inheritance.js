function a() {
	var myObj = {
		name: 'Jeremy'
	};

	var myDog = {
		name: 'Wolfie'
	};

	function b() {
		var myObj = {
			year: 2015
		};

		myObj.name = 'spot';
		myDog.age = 10;
		console.log(myObj);
	}

	b();
	console.log(myObj);
	console.log(myDog);
}

a();

