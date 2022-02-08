function getPINs(observed) {
	// TODO: This is your job, detective!
	let findAdjacent = digit => {
		switch (digit) {
			case "1":
				return ["1", "2", "4"];
			case "2":
				return ["1", "2", "3", "5"];
			case "3":
				return ["2", "3", "6"];
			case "4":
				return ["1", "4", "5", "7"];
			case "5":
				return ["2", "4", "5", "6", "8"];
			case "6":
				return ["3", "5", "6", "9"];
			case "7":
				return ["4", "7", "8"];
			case "8":
				return ["5", "7", "8", "9", "0"];
			case "9":
				return ["6", "8", "9"];
			case "0":
				return ["8", "0"];
		}
	}
	let observedList = observed.split("");
	let combos = [];
	let firstAdjacent = findAdjacent(observedList[0]);
	firstAdjacent.forEach(adjacent => combos.push(adjacent));
	observedList.shift();
	observedList.forEach(observedDigit => {
		let adjacentDigits = findAdjacent(observedDigit);
		combos.forEach(combo => {
			adjacentDigits.forEach(adjacent => {
				combos.push(combo + adjacent);
			});
		});
	});
	return combos.filter(combo => combo.length === observed.length);
}