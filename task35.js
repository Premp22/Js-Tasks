let strTo = (n1, n2) => {
	var mid = Math.round(n1 / n2);
	var res = mid.toString(),
		newArray = res.split("");
	if (res >= 1000) {
		for (var i = res.length - 3; i > 0; i -= 3) {
			newArray.splice(i, 0, ",");
		}
	}
	console.log(newArray);
};

strTo(50, 5);
