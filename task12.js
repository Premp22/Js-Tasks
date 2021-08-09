let check = (num1, num2) => {
	if ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)) {
		console.log("Here one number is positive and other is negative");
	} else {
		console.log("not correct");
	}
};
check(5, -1);
