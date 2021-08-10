let first = (str) => {
	newStr = str.split(" ");
	var len = newStr.length;
	for (var i = 0; i < len; i++) {
		newStr[i] = newStr[i][0].toUpperCase() + newStr[i].substr(1);
	}

	console.log(newStr.join(" "));
};

first("prem is");
