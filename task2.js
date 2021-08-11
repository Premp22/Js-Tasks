let rotate = (str) => {
	var len = str.length;
	var last = len - 1;
	var begining = "";
	var final = "";
	for (var i = len; i > 0; i--) {
		setInterval(() => {
			begining = str[last];
			final = begining + str.slice(0, -1);
			str = final;
			console.log(final);
		}, 1000);
	}
};
rotate("bititude");
