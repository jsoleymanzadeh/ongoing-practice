let recoverSecret = triplets => {
	let result = [];
	triplets.forEach(triplet => {
		triplet.forEach(letter => {
			if (!result.includes(letter)) {
				result.push(letter);
			}
		});
	});
	for (let i = 0; i < triplets.length; i++) {
		let restart = false;
		for(let j = 0; j < 3; j++) {
			if(result.indexOf(triplets[i][j]) > result.indexOf(triplets[i][j + 1]) && j < 2) {
				result.splice(result.indexOf(triplets[i][j]), 1);
				result.splice(result.indexOf(triplets[i][j + 1]), 0, triplets[i][j]);
				restart = true;
			}
		}
		if (restart === true) {
			i = -1;
		}
	}
	return result.join("");
}