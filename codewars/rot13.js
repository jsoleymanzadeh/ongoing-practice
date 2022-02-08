function rot13(message) {
	//your code here
	let charCodes = message.split("").map(letter => letter.charCodeAt(0));
	let encodedCharCodes = charCodes.map(code => {
		if (code > 64 && code < 91) {
			if (code + 13 > 90) {
				return code - 13;
			} else {
				return code + 13;
			}
		} else if (code > 96 && code < 123) {
			if (code + 13 > 122) {
				return code - 13;
			} else {
				return code + 13;
			}
		} else {
			return code;
		}
	});
	return encodedCharCodes.map(code => String.fromCharCode(code)).join("");
}