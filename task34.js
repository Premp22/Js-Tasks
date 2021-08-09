let vowel = (s) => {
	var count = 0;
	var i = 0;
	while (s[i] != "/0") {
		if (
			s[i] == "a" ||
			s[i] == "A" ||
			s[i] == "e" ||
			s[i] == "E" ||
			s[i] == "i" ||
			s[i] == "I" ||
			s[i] == "o" ||
			s[i] == "O" ||
			s[i] == "u" ||
			s[i] == "U"
		) {
			count++;
			i++;
		}
		console.log(count);
	}
};
vowel("aae");
