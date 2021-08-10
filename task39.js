let equal = (str1, str2) => {
	len1 = str1.length;
	len2 = str2.length;
	if (len1 == len2) {
		console.log(str1 + str2);
	} else if (len1 > len2) {
		var rem = str1.substr(0, len2);
		console.log(rem + str2);
	} else {
		var rem = str2.substr(0, len1);
		console.log(str1 + rem);
	}
};

equal("pr", "em");
equal("pris", "em");
equal("pr", "emis");
