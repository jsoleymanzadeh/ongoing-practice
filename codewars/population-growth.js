function nbYear(p0, percent, aug, p) {
	// your code
	let finalPopulation = p0;
	let years = 0;
	while (finalPopulation < p) {
		years++;
		finalPopulation += (finalPopulation * percent * 0.01) + aug;
	}
	return years;
}