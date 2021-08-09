let check = (num1, num2) => {
	let sum = num1 + num2;
	if (num1 == 50 || num2 == 50 || sum == 50) {
		return true;
	} else {
		return false;
	}
};

console.log(check(50, 2));
console.log(check(2, 2));
console.log(check(50, 50));
