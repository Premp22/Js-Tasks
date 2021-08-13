let zeros = (n) => {
	let sum = 0;
	for (var i = 5; i <= n; i += 5) {
		let num = i;
		while (num % 5 === 0) {
			num /= 5;
			sum++;
		}
	}
	console.log(sum);
};
zeros(8);
