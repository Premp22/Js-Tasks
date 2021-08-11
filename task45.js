let check = (arr1, arr2) => {
	len1 = arr1.length;

	len2 = arr2.length;
	if (len1 == len2) {
		for (i = 0; i < arr1.length; i++) {
			for (j = 0; j < arr2.length; j++) {
				if (arr1[i] == arr2[j]) {
					console.log("true");
					break;
				}
			}
		}
	}
};
check([1, 2, 5, 4, 5], [1, 2, 5, 4, 5]);
