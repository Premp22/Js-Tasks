let idMatrix = (matrix) => {
	var flag = 0;
	for (var i = 0; i < matrix.length; i++) {
		for (j = 0; j < matrix.length; j++) {
			if (i == j && matrix[i][j] != 1) {
				flag = 1;
			} else if (i != j && matrix[i][j] != 0) {
				flag = 1;
			}
		}
	}
	if (flag == 1) {
		console.log("Not a identity matrix");
	} else {
		console.log("Identity matrix");
	}
};
idMatrix([
	[1, 0, 0],
	[0, 1, 0],
	[0, 0, 1],
]);
