function findMedian(arr) {
	// Write your code here
	arr.sort(function(a, b) {
		return a - b;
	});
	return arr[Math.floor(arr.length / 2)];
}