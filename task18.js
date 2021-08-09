let add = (str) => {
	if (str.length > 3) {
		let first = str.substr(4, 3);
		newStr = first + str + first;
		console.log(newStr);
	} else {
		console.log("String length is less than three");
	}
};
add("welcome");
