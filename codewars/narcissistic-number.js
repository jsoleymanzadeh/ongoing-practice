function narcissistic(value) {
	// Code me to return true or false
	let tempString = value.toString();
	let digits = [];
	let finalSum = 0;
	for(let i = 0; i < tempString.length; i++) {
		digits.push(tempString.charAt(i));
	}
	digits.forEach(function(digit, index) {
		digits[index] = Number(digit) ** digits.length;
	});
	digits.forEach(function(digit) {
		finalSum += digit;
	})
	return finalSum === value;
}