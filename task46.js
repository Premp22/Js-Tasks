let large = (arr) => {
	let len = arr.length;
	var largest = arr[0];
	for (var i = 1; i < len; i++) {
		if (largest < arr[i]) largest = arr[i];
	}
	console.log(largest);
};
large([1, 6, 3, 5, 7, 10, 9]);
