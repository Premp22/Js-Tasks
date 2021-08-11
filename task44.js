let sum = (arr) => {
	var sum = [0, 0];
	for (var i = 0; i < arr.length; i++) {
		if (i % 2) {
			sum[1] = sum[1] + arr[i];
		} else {
			sum[0] = sum[0] + arr[i];
		}
	}
	console.log(sum);
};
sum([1, 2, 3, 4]);
