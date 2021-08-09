let check = (num1, num2, num3) => {
	if (num2 > num1 && num3 > num2) {
		console.log("strict");
	} else if (num3 > num2) {
		console.log("soft");
	}
};

check(24, 22, 30);
check(10, 15, 20);
