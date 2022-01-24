function gridChallenge(grid) {
	// Write your code here
	let isAlphabetical = true;
	grid.forEach(function (row, index) {
		let tempRow = row.split("");
		tempRow.sort();
		grid[index] = tempRow;
	});
	for (let i = 0; i < grid.length; i++) {
		let column = [];
		for (let j = 0; j < grid.length; j++) {
			column.push(grid[j][i]);
		}
		let unsortedColumn = [...column];
		column.sort();
		column.forEach(function (letter, index) {
			if (letter !== unsortedColumn[index]) {
				isAlphabetical = false;
			}
		});
	}
	if (isAlphabetical) {
		return "YES";
	} else {
		return "NO";
	}
}