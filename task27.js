let find = (num1, num2, num3) => {
	if (
		num1 % 10 == num2 % 10 ||
		num2 % 10 == num3 % 10 ||
		num1 % 10 == num3 % 10
	) {
		console.log("last digits are equal");
	} else {
		console.log("last digits are not equal");
	}
};
find(11, 21, 30);
find(10, 20, 30);
find(12, 11, 13);
