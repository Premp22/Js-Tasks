let sum = (num1, num2) => {
	if (num1 != num2) {
		const sumIs = num1 + num2;
		console.log(sumIs);
	} else if (num1 == num2) {
		const sumIs = (num1 + num2) * 3;
		console.log(sumIs);
	}
};

sum(5, 4);
sum(5, 5);
