let swap = (str) => {
	if (str.length >= 1) {
		let center = str.substring(1, str.length - 1);

		let first = str.substr(0, 1);

		let last = str.charAt(str.length - 1);
		let newStr = last + center + first;
		console.log(newStr);
	}
};
swap("prem");
