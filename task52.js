let diMatrix = (matrix) => {
	var flag = 0;
	for (var i = 0; i < matrix.length; i++) {
		for (j = 0; j < matrix.length; j++) {
			if (i != j && matrix[i][j] != 0) {
				flag = 1;
			}
		}
	}
	if (flag == 1) {
		console.log("not a diagonal matrix");
	} else {
		console.log("diagonal matrix");
	}
};
diMatrix([
	[1, 0, 0],
	[0, 2, 0],
	[0, 0, 1],
]);
