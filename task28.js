let check = (num1, num2, num3) => {
	if (
		(num1 > 20 && (num1 < num2 || num1 < num3)) ||
		(num2 >= 20 && (num2 < num1 || num2 < num3)) ||
		(num3 >= 20 && (num3 < num1 || num3 < num2))
	) {
		console.log("true");
	} else {
		console.log("false");
	}
};
check(25, 50, 15);
check(23, 23, 10);
