let find = (arr) => {
	if (arr[0] > arr[3]) {
		max = arr[0];
		arr[0] = max;
		arr[1] = max;
		arr[2] = max;
		arr[3] = max;
		console.log(arr);
	} else {
		max = arr[3];
		arr[0] = max;
		arr[1] = max;
		arr[2] = max;
		arr[3] = max;
		console.log(arr);
	}
};
find([5, 2, 4, 4]);
find([3, 2, 1, 4]);
