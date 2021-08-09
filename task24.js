let convert = (str) => {
	let len = str.length;
	if (len < 3) {
		strU = str.toUpperCase();
		console.log(strU);
	} else {
		part1 = str.substr(0, 3);
		lower = part1.toLowerCase();
		part2 = str.substr(3, str.length);
		newstr = lower + part2;
		console.log(newstr);
	}
};
convert("pr");
convert("PRem");
