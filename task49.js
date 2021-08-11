let find = (num) => {
	let primeArr = [];
	let value = 0;
	primeArr.push(1);
	for (var i = 2; i <= num; i++) {
		value = 0;
		for (var j = 1; j <= i; j++) {
			if (i % j == 0) {
				value = value + 1;
			}
		}
		if (value == 2) {
			primeArr.push(i);
		}
	}
	console.log(primeArr);
};
find(13);
