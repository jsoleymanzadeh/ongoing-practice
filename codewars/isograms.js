function isIsogram(str) {
	//...
	let letters = str.toLowerCase().split("");
	let comparedLetter;
	for (let i = 0; i < letters.length; i++) {
		comparedLetter = letters[i];
		letters.shift();
		i--;
		if (letters.includes(comparedLetter)) {
			return false;
		}
	}
	return true;
}