let calculate = (num) => {
	let sum = 0;
	while (num >= 1) {
		sum += num;
		num = num / 2;
	}
	console.log(sum);
};
calculate(8);
