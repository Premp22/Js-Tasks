let diff = (num) => {
	let difference = num - 13;
	console.log("The difference", difference);
	if (num > 13) {
		return difference * 2;
	}
};
let result = diff(15);
console.log("The absolute double of difference is:", result);
