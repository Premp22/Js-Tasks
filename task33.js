let order = (str) => {
	newStr = str.split("");
	for (var i = 0; i < newStr.length; i++) {
		newStr = newStr.sort();
	}
	console.log((newStr = newStr.join("")));
};

order("prem");
