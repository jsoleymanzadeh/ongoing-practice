function caesarCipher(s, k) {
	// Write your code here
	function adjustIndex(inputLetter, encryptAmount) {
		let newLetterIndex = alphabet.indexOf(inputLetter) + encryptAmount;
		while (newLetterIndex > 25) {
			newLetterIndex -= 26;
		}
		return newLetterIndex;
	}

	let message = s.split("");
	let alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
	let encrypted = [];
	message.forEach(function (letter) {
		let isUpperCase = false;
		if (letter === letter.toUpperCase()) {
			isUpperCase = true;
		}
		if (alphabet.includes(letter)) {
			encrypted.push(alphabet[adjustIndex(letter, k)]);
		} else if (alphabet.includes(letter.toLowerCase()) && isUpperCase) {
			encrypted.push(alphabet[adjustIndex(letter.toLowerCase(), k)].toUpperCase());
		} else {
			encrypted.push(letter);
		}
	});
	let output = encrypted.join("");
	return output;
}