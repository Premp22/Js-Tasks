let remove = (str1, str2) => {
	let newStr1 = str1.substr(1, str1.length);
	let newStr2 = str2.substr(1, str2.length);
	let newStr = newStr1 + newStr2;
	console.log(newStr);
};
remove("prem", "is");
