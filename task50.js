let zeros = (num) => {
	let sum = 0;
	while (num > 0) {
		num /= 5;
		sum += num;
	}
	console.log(sum);
};
zeros(150);
