function countingSort(arr) {
	// Write your code here
	let frequencies = [];
	for(let i = 0; i < 100; i++) {
		frequencies.push(0);
	}
	arr.forEach(function(number, index) {
		frequencies[number]++;
	});
	return frequencies;
}