let remove = (str, char) => {
	first = str.substring(0, char);
	second = str.substring(char + 1, str.length);
	console.log(first + second);
};
remove("prem", 2);
