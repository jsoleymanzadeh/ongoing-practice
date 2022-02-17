function gap(g, m, n) {
	// your code
	let determinePrime = number => {
		let isPrime = true;
		for (let i = 2; i < number; i++) {
			if (number % i === 0) {
				return false;
			}
		}
		return true;
	}
	let eligible = []
	for(let i = m; i <= n; i++) {
		if(determinePrime(i)) {
			eligible.push(i);
		}
	}
	console.log(eligible);
}

gap(0, 3, 30);