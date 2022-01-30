function findNb(m) {
	// your code
	let volume = 0;
	let side = 0;
	while (volume < m) {
		side++;
		volume += Math.pow(side, 3);
	}
	if (volume === m) {
		return side;
	} else {
		return -1;
	}
}