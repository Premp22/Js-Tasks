let leap = (year) => {
	if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
		console.log("leap");
	} else {
		console.log("not leap year");
	}
};
leap(100);
