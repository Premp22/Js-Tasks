let strMove = (str) => {
	if (str.length >= 3) {
		let lastThree = str.substr(-3, str.length);
		let first = str.slice(0, -3);
		const newStr = lastThree + first;
		console.log(newStr);
	}
};
strMove("javaScript");
