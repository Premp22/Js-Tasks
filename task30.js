let alpha = (str) => {
	let char = str.split("");
	for (var i = 0; i < char.length; i++) {
		var n = char[i].charCodeAt() - "a".charCodeAt();
		n = (n + 1) % 26;
		char[i] = String.fromCharCode(n + "a".charCodeAt());
	}
	console.log(char.join(""));
};

alpha("prem");
