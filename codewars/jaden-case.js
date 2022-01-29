String.prototype.toJadenCase = function () {
	//...
	let words = this.split(" ");
	words.forEach(function (word, index) {
		let letters = word.split("");
		letters[0] = letters[0].toUpperCase();
		words[index] = letters.join("");
	});
	return words.join(" ");
};