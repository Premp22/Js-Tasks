let find = (num1, num2) => {
	let dif1 = 100 - num1;
	let dif2 = 100 - num2;
	if (dif1 < dif2) {
		console.log("the nearest to 100 is :", num1);
	} else {
		console.log("the nearest to 100 is :", num2);
	}
};
find(50, 99);
