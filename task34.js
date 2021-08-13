let count = (str) => {
	let vowels = "aeiouAEIOU";
	let count = 0;

	for (var i = 0; i < str.length; i++) {
		if (vowels.indexOf(str[i]) !== -1) {
			count += 1;
		}
	}
	console.log(count);
};
count("aei is the");
