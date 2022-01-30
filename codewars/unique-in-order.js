function uniqueInOrder(iterable) {
	//your code here - remember iterable can be a string or an array
	if (typeof iterable === "object") {
		return filter(iterable);
	} else {
		return filter(iterable.split(""));
	}

	function filter(input) {
		let tracker = [];
		input.forEach(function (char) {
			if (char !== tracker[tracker.length - 1]) {
				tracker.push(char);
			}
		});
		return tracker;
	}
}