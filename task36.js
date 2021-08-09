let divide = (str) => {
	len = str.length;
	if (len % 2 == 0) {
		newStr = str.substr(0, str.length / 2);
		console.log(newStr);
	}
};
divide("prem");
