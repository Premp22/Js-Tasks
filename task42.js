let find = (arr) => {
	len = arr.length;
	if (arr[0] > arr[len - 1]) {
		for (var i = 0; i < arr.length; i++) {
			arr[i] = arr[0];
		}
		console.log(arr);
	} else {
		for (var i = 0; i < arr.length; i++) {
			arr[i] = arr[len - 1];
		}
		console.log(arr);
	}
};
find([5, 2, 5, 7]);
