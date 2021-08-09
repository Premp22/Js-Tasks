let add = (str) => {
	if (str.startsWith("py")) {
		return str;
	} else {
		return "py" + str;
	}
};
console.log(add("charm"));
console.log(add("python"));
