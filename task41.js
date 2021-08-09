let check = (arr) => {
	let len = arr.length;
	if (len >= 1) {
		let last = arr.length - 1;
		if (arr[0] == 1 || arr[last] == 1) {
			console.log("1 is present in the first or last");
		} else {
			console.log("1 is not present in the first or last");
		}
	}
};
check([1, 5, 3]);
check([4, 5, 3]);
