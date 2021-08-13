let dcount = (num) => {
	var Sum = function (num) {
		let sum = 0;
		while (num) {
			rem = num % 10;
			sum += rem;
			num = Math.floor(num / 10);
		}
		return sum;
	};
	let count = 0;
	while (num >= 10) {
		count++;
		num = Sum(num);
	}
	console.log(count);
};

dcount(55);
