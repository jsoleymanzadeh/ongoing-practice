let dblLinear = n => {
	let firstFunction = number => (number * 2) + 1;
	let secondFunction = number => (number * 3) + 1;
	let collection = [1];
	for (let i = 0; i < n; i++) {
		if (!collection.includes(firstFunction(collection[i]))) collection.push(firstFunction(collection[i]));
		if (!collection.includes(secondFunction(collection[i]))) collection.push(secondFunction(collection[i]));
		collection.sort((a, b) => a - b);
	}
	console.log(collection.length);
	console.log(collection);
	return collection[n];
}
dblLinear(100);