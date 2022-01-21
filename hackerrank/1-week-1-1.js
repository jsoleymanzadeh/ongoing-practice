function plusMinus(arr) {
	// Write your code here
	let counterArray = [0, 0, 0]
	arr.forEach(function (number) {
		if (number > 0) {
			counterArray[0]++;
		} else if (number < 0) {
			counterArray[1]++;
		} else if (number === 0) {
			counterArray[2]++;
		}
	});
	counterArray.forEach(function (counter, index) {
		console.log((counter / arr.length).toFixed(6));
	});
}