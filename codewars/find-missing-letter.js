function findMissingLetter(array) {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	let lowerAlphabet = alphabet.split("");
	let upperAlphabet = alphabet.toUpperCase().split("");
	if (array[0] === array[0].toUpperCase()) {
		let startPoint = upperAlphabet.indexOf(array[0]);
		for (let i = 0; i < array.length; i++) {
			if (array[i] !== upperAlphabet[i + startPoint]) {
				return upperAlphabet[i + startPoint];
			}
		}
	} else {
		let startPoint = lowerAlphabet.indexOf(array[0]);
		for (let i = 0; i < array.length; i++) {
			if (array[i] !== lowerAlphabet[i + startPoint]) {
				return lowerAlphabet[i + startPoint];
			}
		}
	}
}

console.log(findMissingLetter(["O", "Q", "R", "S"]));