function duplicateEncode(word) {
	// ...
	let letters = word.split("");
	let encodedLetters = [];
	letters.forEach(function (letter, index) {
		let isDuplicate = false;
		for (let i = 0; i < letters.length; i++) {
			if (letters[i].toLowerCase() === letter.toLowerCase() && i !== index) {
				isDuplicate = true;
				break;
			}
		}
		if (isDuplicate) {
			encodedLetters.push(")");
		} else {
			encodedLetters.push("(");
		}
	});
	return encodedLetters.join("");
}