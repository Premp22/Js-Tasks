let rev = (str) => {
	let strlen = str.length;
	let revStr = "";
	for (var i = strlen - 1; i >= 0; i--) {
		revStr += str[i];
	}
	console.log("the reverse is", revStr);
};
rev("Welcom to world");
