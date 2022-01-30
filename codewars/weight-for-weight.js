function orderWeight(strng) {
	// your code
	let numberList = strng.split(" ");
	numberList.sort(function (a, b) {
		function convertToSum(input) {
			let digits = input.split("");
			let sum = 0;
			digits.forEach(function (digit) {
				sum += Number(digit);
			});
			return sum;
		}

		if (convertToSum(a) !== convertToSum(b)) {
			return convertToSum(a) - convertToSum(b);
		} else {
			let sameSum = [a, b].sort();
			if (sameSum[0] === a) {
				return -1;
			} else if (sameSum[0] === b) {
				return 1;
			}
		}
	});
	return numberList.join(" ");
}