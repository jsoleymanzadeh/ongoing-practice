let lastDigit = (str1, str2) => {
	let str1Array = str1.split("");
	let str2Array = str2.split("");
	let base = Number(str1Array[str1Array.length - 1]);
	let exponent;
	if (str2Array.length > 1) {
		exponent = Number([str2Array[str2Array.length - 2], str2Array[str2Array.length - 1]].join("")) % 4;
		if (exponent === 0) {
			exponent += 4;
		}
	} else {
		exponent = Number(str2) % 4;
	}
	let productArray = (base ** exponent).toString().split("");
	return Number(productArray[productArray.length - 1]);
}