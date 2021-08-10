let find = (str) => {
	let sub = str.substr(4, 6);
	if (sub == "script" || sub == "Script") {
		return str.substr(0, 4) + str.substr(10, str.length - 1);
	} else console.log(str);
};
let result = find("javaScript is");
console.log(result);
