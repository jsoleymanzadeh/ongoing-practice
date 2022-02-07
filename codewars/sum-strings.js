function sumStrings(a, b) {
	let arrayA = a.split("");
	let arrayB = b.split("");
	let result = []
	arrayA.reverse();
	arrayB.reverse();
	let overflow = false;
	if (arrayA.length >= arrayB.length) {
		while (arrayA.length !== arrayB.length) {
			arrayB.push("0");
		}
		arrayA.forEach(function (digit, index) {
			let sum = Number(digit) + Number(arrayB[index]);
			if (overflow) {
				sum++;
				overflow = false;
			}
			if (sum >= 10) {
				sum -= 10;
				overflow = true;
			}
			result.push(sum.toString());
		});
	} else {
		while (arrayA.length !== arrayB.length) {
			arrayA.push("0");
		}
		arrayB.forEach(function (digit, index) {
			let sum = Number(digit) + Number(arrayA[index]);
			if (overflow) {
				sum++;
				overflow = false;
			}
			if (sum >= 10) {
				sum -= 10;
				overflow = true;
			}
			result.push(sum.toString());
			console.log(result);
		});
	}
	if (overflow) {
		result.push("1");
	}
	result.reverse();
	while (result[0] === "0") {
		result.shift();
	}
	return result.join("");
}