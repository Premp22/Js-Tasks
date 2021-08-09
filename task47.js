let mostRepeat = (arr) => {
	let fr = arr[0];
	let mcount = 0;
	let len = arr.length;
	for (var i = 0; i < len; i++) {
		let count = 0;
		for (var j = i + 1; j < len; j++) {
			if (arr[i] == arr[j]) {
				count++;
			}
		}
		if (mcount < count) {
			mcount = count;
			fr = arr[i];
		}
	}
	console.log(fr);
};
mostRepeat([1, 1, 2, 3, 5, 5, 5]);
