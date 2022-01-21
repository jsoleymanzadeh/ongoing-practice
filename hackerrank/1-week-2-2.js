function diagonalDifference(arr) {
	// Write your code here
	let diagonalSum1 = 0;
	let diagonalSum2 = 0;
	let index2 = arr.length - 1;
	arr.forEach(function(array, index) {
		diagonalSum1 += array[index];
		diagonalSum2 += array[index2];
		index2--;
	});
	return Math.abs(diagonalSum1 - diagonalSum2);
}