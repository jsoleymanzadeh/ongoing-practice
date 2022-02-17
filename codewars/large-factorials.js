let factorial = n => {
	let multiply = (a, b) => {
		let arrayA;
		let arrayB;
		if (a.length > b.length) {
			arrayA = a.split("").reverse();
			arrayB = b.split("").reverse();
		} else {
			arrayA = b.split("").reverse();
			arrayB = a.split("").reverse();
		}
		let result = [];
		for (let i = 0; i < arrayB.length; i++) {
			let carry = 0;
			let additionLine = [];
			for (let k = 0; k < i; k++) {
				additionLine.push("0");
			}
			for (let j = 0; j < arrayA.length; j++) {
				let product = Number(arrayA[j]) * Number(arrayB[i]);
				if (j !== arrayA.length - 1) {
					let productArray = product.toString().split("").reverse();
					let toPush = Number(productArray[0]) + carry;
					if (toPush > 9 && productArray[1]) {
						let tempArray = toPush.toString().split("").reverse();
						toPush = Number(tempArray[0]);
						productArray[1] = (Number(productArray[1]) + Number(tempArray[1])).toString();
					} else if (toPush > 9 && !productArray[1]) {
						let tempArray = toPush.toString().split("").reverse();
						toPush = Number(tempArray[0]);
						productArray.push(tempArray[1]);
					}
					additionLine.push((toPush).toString());
					if (productArray[1]) {
						carry = Number(productArray[1]);
					} else {
						carry = 0;
					}
				} else {
					additionLine.push((product + carry).toString());
					result.push(additionLine.reverse().join(""));
				}
			}
		}
		result.reverse();
		let toBeAdded = result.map(number => {
			let numberArray = number.split();
			for (let i = 0; i < result[0].length - number.length; i++) {
				numberArray.unshift("0");
			}
			return numberArray.join("");
		});
		let sumArray = [];
		let carry = 0;
		for (let i = 0; i < toBeAdded[0].length; i++) {
			let tempSum = carry;
			for (let j = 0; j < toBeAdded.length; j++) {
				tempSum += Number(toBeAdded[j].split("").reverse()[i]);
			}
			let tempSumArray = tempSum.toString().split("").reverse();
			if (i !== toBeAdded[0].length - 1) {
				sumArray.push(tempSumArray[0]);
				if (tempSumArray[1]) {
					carry = Number(tempSumArray[1]);
				} else {
					carry = 0;
				}
			} else {
				sumArray.push(tempSum.toString());
			}
		}
		return sumArray.reverse().join("");
	}
	if (n === 0) {
		return "0";
	}
	let finalResult = (1).toString();
	for (let i = 2; i <= n; i++) {
		finalResult = multiply(finalResult, i.toString());
	}
	return finalResult;
}