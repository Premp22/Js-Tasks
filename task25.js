let grade = (mark) => {
	if (mark >= 89 && mark <= 100) {
		console.log("Got A+");
		return true;
	} else {
		console.log("Grade is not A+");
		return false;
	}
};

let result = grade(95);

console.log(result);
