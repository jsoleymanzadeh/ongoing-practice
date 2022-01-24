function DNAStrand(dna) {
	//your code here
	let strand = dna.split("");
	let complement = [];
	strand.forEach(function (letter) {
		if (letter === "A") {
			complement.push("T");
		} else if (letter === "C") {
			complement.push("G");
		} else if (letter === "G") {
			complement.push("C");
		} else if (letter === "T") {
			complement.push("A");
		}
	});
	return complement.join("");
}