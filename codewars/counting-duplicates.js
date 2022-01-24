function duplicateCount(text) {
	//...
	let letters = text.toLowerCase().split("");
	let uniqueChars = [];
	for (let i = 0; i < letters.length; i++) {
		let comparison = letters[i];
		letters.shift();
		i--;
		if (letters.includes(comparison) && !uniqueChars.includes(comparison)) {
			uniqueChars.push(comparison);
		}
	}
	return uniqueChars.length;
}