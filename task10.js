let diff = (num) => {
	let difference = num - 19;
	console.log("The difference", difference);
	if (num > 19) {
		return difference * 3;
	}
};
let result = diff(22);
console.log("The absolute double of difference is:", result);
