let loMatrix = (matrix) => {
	var flag = 0;
	for (var i = 0; i < matrix.length; i++) {
		for (j = 0; j < matrix.length; j++) {
			if (j > i && matrix[i][j] != 0) {
				flag = 1;
			}
		}
	}
	if (flag == 1) {
		console.log("lower Triangular matrix");
	} else {
		console.log("lower Triangular matrix");
	}
};
loMatrix([
	[1, 0, 0],
	[0, 5, 0],
	[4, 4, 3],
]);
